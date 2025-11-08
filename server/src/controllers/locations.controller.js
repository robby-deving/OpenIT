const { supabase } = require ('../config/supabase.js');

/**
 * Get all locations
 */
exports.getLocations = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('locations')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching locations:', error.message);
    res.status(500).json({ error: 'Failed to fetch locations' });
  }
};

/**
 * Get a single location by ID
 */
exports.getLocationById = async (req, res) => {
  const { id } = req.params;

  try {
    const { data, error } = await supabase
      .from('locations')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;

    if (!data) {
      return res.status(404).json({ error: 'Location not found' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching location:', error.message);
    res.status(500).json({ error: 'Failed to fetch location' });
  }
};

/**
 * Create a new location
 */
exports.createLocation = async (req, res) => {
  const { name, latitude, longitude, category } = req.body;

  if (!name || !latitude || !longitude || !category) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const { data, error } = await supabase
      .from('locations')
      .insert([{ name, latitude, longitude, category }])
      .select()
      .single();

    if (error) throw error;

    res.status(201).json(data);
  } catch (error) {
    console.error('Error creating location:', error.message);
    res.status(500).json({ error: 'Failed to create location' });
  }
};

/**
 * Update a location
 */
exports.updateLocation = async (req, res) => {
  const { id } = req.params;
  const { name, latitude, longitude, category } = req.body;

  try {
    const { data, error } = await supabase
      .from('locations')
      .update({
        name,
        latitude,
        longitude,
        category,
        updated_at: new Date(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;

    if (!data) {
      return res.status(404).json({ error: 'Location not found' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error updating location:', error.message);
    res.status(500).json({ error: 'Failed to update location' });
  }
};

/**
 * Delete a location
 */
exports.deleteLocation = async (req, res) => {
  const { id } = req.params;

  try {
    const { error } = await supabase
      .from('locations')
      .delete()
      .eq('id', id);

    if (error) throw error;

    res.status(204).send();
  } catch (error) {
    console.error('Error deleting location:', error.message);
    res.status(500).json({ error: 'Failed to delete location' });
  }
};