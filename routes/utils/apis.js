// // utils/apis.js
// function registerCRUDRoutes(router, url, Model, fields = []) {
//   // GET all
//   router.get(url, async (req, res) => {
//     try {
//       const items = await Model.find();
//       res.json(items);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });

//   // POST
//   router.post(url, async (req, res) => {
//     try {
//       const data = extractFields(req.body, fields);
//       const newItem = new Model(data);
//       const saved = await newItem.save();
//       res.status(201).json(saved);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });

//   // PUT
//   router.put(`${url}/:id`, async (req, res) => {
//     try {
//       const data = extractFields(req.body, fields);
//       const updated = await Model.findByIdAndUpdate(req.params.id, data, { new: true });
//       if (!updated) return res.status(404).json({ message: 'Not found' });
//       res.json(updated);
//     } catch (err) {
//       res.status(400).json({ message: err.message });
//     }
//   });

//   // DELETE
//   router.delete(`${url}/:id`, async (req, res) => {
//     try {
//       const deleted = await Model.findByIdAndDelete(req.params.id);
//       if (!deleted) return res.status(404).json({ message: 'Not found' });
//       res.json({ message: 'Deleted successfully' });
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });
// }

// // Utility to safely extract only required fields from req.body
// function extractFields(body, fields) {
//   const extracted = {};
//   fields.forEach((field) => {
//     if (body[field] !== undefined) {
//       extracted[field] = body[field];
//     }
//   });
//   return extracted;
// }

// module.exports = { registerCRUDRoutes };
