/**
 * Explore Controller
 * Destinations and Activities search & GPS distance calculation
 */

function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  if (!lat1 || !lon1 || !lat2 || !lon2) return null;
  const R = 6371; // Earth radius in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

const { DESTINATIONS, ACTIVITIES } = require('../config/destinations');

async function getDestinations(req, res, next) {
  try {
    const { search, region, price, category, userLat, userLng } = req.query;

    let items = DESTINATIONS.map(d => {
      let distanceKm = null;
      if (userLat && userLng) {
        distanceKm = calculateDistanceKm(Number(userLat), Number(userLng), d.lat, d.lng);
      }
      return { ...d, distanceKm };
    });

    let filtered = items.filter(d => {
      if (search && !d.name.toLowerCase().includes(search.toLowerCase()) && !d.country.toLowerCase().includes(search.toLowerCase())) return false;
      if (region && region !== 'All' && d.region !== region) return false;
      if (price && price !== 'All' && d.priceLevel !== price) return false;
      if (category && category !== 'All' && d.category !== category) return false;
      return true;
    });

    if (userLat && userLng) {
      filtered.sort((a, b) => (a.distanceKm || 99999) - (b.distanceKm || 99999));
    }

    res.json({ destinations: filtered });
  } catch (error) {
    next(error);
  }
}

async function getActivities(req, res, next) {
  try {
    const { search, category, city } = req.query;

    let filtered = ACTIVITIES.filter(a => {
      if (search && !a.name.toLowerCase().includes(search.toLowerCase()) && !a.category.toLowerCase().includes(search.toLowerCase())) return false;
      if (category && category !== 'All' && a.category.toLowerCase() !== category.toLowerCase()) return false;
      if (city && a.city.toLowerCase() !== city.toLowerCase()) return false;
      return true;
    });

    res.json({ activities: filtered });
  } catch (error) {
    next(error);
  }
}

module.exports = { getDestinations, getActivities };
