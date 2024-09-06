// import type { NextApiRequest, NextApiResponse } from 'next';
// // import midtransClient from 'midtrans-client';

// // const snap = new midtransClient.Snap({
// //   isProduction: false,
// //   serverKey: process.env.MIDTRANS_SERVER_KEY as string,
// // });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   switch (req.method) {
//     case 'POST':
//       const { reservationId, amount } = req.body;

//       if (!reservationId || !amount) {
//         return res.status(400).json({ message: 'Reservation ID and amount are required' });
//       }

//       const parameter = {
//         transaction_details: {
//           order_id: reservationId,
//           gross_amount: amount,
//         },
//         credit_card: {
//           secure: true,
//         },
//         customer_details: {
//           first_name: 'Customer',
//           last_name: 'Name',
//           email: 'customer@example.com',
//           phone: '08111222333',
//         },
//       };

//       try {
//         // const transaction = await snap.createTransaction(parameter);
//         // res.status(200).json({ token: transaction.token });
//       // } catch (error) {
//       //   res.status(500).json({ message: 'Failed to create transaction', error: error.message });
//       // }
//       break;
//     default:
//       res.setHeader('Allow', ['POST']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
