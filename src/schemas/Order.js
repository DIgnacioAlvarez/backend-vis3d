import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Relación con el modelo User
    required: true
  },
  orderItems: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Relación con el modelo Product
        required: true
      },
      name: { type: String, required: true },  // Nombre del producto
      qty: { type: Number, required: true },   // Cantidad del producto
      price: { type: Number, required: true }, // Precio unitario del producto
    }
  ],
  paymentStatus: {
    type: String,
    required: true,
    enum: ['pending', 'completed', 'failed', 'refunded'], // Opciones de estado de pago
    default: 'pending'
  },
  shippingStatus: {
    type: String,
    required: true,
    enum: ['pending', 'shipped', 'delivered', 'cancelled'], // Opciones de estado de envío
    default: 'pending'
  },
  orderDate: {
    type: Date,
    required: true,
    default: Date.now // Fecha cuando se realiza la orden
  },
  total: {
    type: Number,
    required: true
  }
}, {
  timestamps: true // Añade las propiedades createdAt y updatedAt
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;