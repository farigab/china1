const { createInvoice } = require("./createInvoice.js");

const invoice = {
  shipping: {
    name: "Test",
    address: "Avenida Rio Branco",
    city: "Rio de Janeiro",
    state: "RJ",
    country: "BR",
    postal_code: 20040-905
  },
  items: [
    {
      item: "caneta",
      description: "caneta azul",
      quantity: 2,
      amount: 10000
    },
    {
      item: "mouse",
      description: "mouse gamer",
      quantity: 1,
      amount: 8000
    }
  ],
  subtotal: 18000,
  paid: 0,
  invoice_nr: 1234
};

createInvoice(invoice, "invoice.pdf");
