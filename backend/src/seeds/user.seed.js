import "dotenv/config";

import mongoose from "mongoose";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

const seedUsers = [
  [
    "seed_ankit_jha",
    "Ankit Jha",
    "ankit.jha@example.com",
    "https://i.pravatar.cc/150?img=1",
  ],
  [
    "seed_raaz_kesari",
    "Raaz Kesari",
    "raaz.kesari@example.com",
    "https://i.pravatar.cc/150?img=2",
  ],
  [
    "seed_gamvir_khanal",
    "Gamvir Khanal",
    "gamvir.khanal@example.com",
    "https://i.pravatar.cc/150?img=3",
  ],
  [
    "seed_subham_kumar_das",
    "Subham Kumar Das",
    "subham.kumar.das@example.com",
    "https://i.pravatar.cc/150?img=4",
  ],
  [
    "seed_bibhusan_kc",
    "Bibhusan KC",
    "bibhusan.kc@example.com",
    "https://i.pravatar.cc/150?img=5",
  ],
  [
    "seed_bimochan_chaudhary",
    "Bimochan Chaudhary",
    "bimochan.chaudhary@example.com",
    "https://i.pravatar.cc/150?img=6",
  ],
  [
    "seed_diwas_pant",
    "Diwas Pant",
    "diwas.pant@example.com",
    "https://i.pravatar.cc/150?img=7",
  ],
  [
    "seed_oasis_poudel",
    "Oasis Poudel",
    "oasis.poudel@example.com",
    "https://i.pravatar.cc/150?img=8",
  ],
  [
    "seed_rounit_sharaff",
    "Rounit Sharaff",
    "rounit.sharaff@example.com",
    "https://i.pravatar.cc/150?img=9",
  ],
  [
    "seed_niranjan_chaudhary",
    "Niranjan Chaudhary",
    "niranjan.chaudhary@example.com",
    "https://i.pravatar.cc/150?img=10",
  ],
  [
    "seed_naman_singhal",
    "Naman Singhal",
    "naman.singhal@example.com",
    "https://i.pravatar.cc/150?img=11",
  ],
  [
    "seed_sandip_yadav",
    "Sandip Yadav",
    "sandip.yadav@example.com",
    "https://i.pravatar.cc/150?img=12",
  ],
  [
    "seed_ritik_yadav",
    "Ritik Yadav",
    "ritik.yadav@example.com",
    "https://i.pravatar.cc/150?img=13",
  ],
  [
    "seed_sumit_jha",
    "Sumit Jha",
    "sumit.jha@example.com",
    "https://i.pravatar.cc/150?img=14",
  ],
  [
    "seed_rishav_thapa",
    "Rishav Thapa",
    "rishav.thapa@example.com",
    "https://i.pravatar.cc/150?img=15",
  ],
  [
    "seed_aashutosh_mainali",
    "Aashutosh Mainali",
    "aashutosh.mainali@example.com",
    "https://i.pravatar.cc/150?img=16",
  ],
  [
    "seed_ashwini_jha",
    "Ashwini Jha",
    "ashwini.jha@example.com",
    "https://i.pravatar.cc/150?img=17",
  ],
  [
    "seed_himanshu_mahaseth",
    "Himanshu Mahaseth",
    "himanshu.mahaseth@example.com",
    "https://i.pravatar.cc/150?img=18",
  ],
  [
    "seed_lakshya_karn",
    "Lakshya Karn",
    "lakshya.karn@example.com",
    "https://i.pravatar.cc/150?img=19",
  ],
  [
    "seed_abhinav_rijal",
    "Abhinav Rijal",
    "abhinav.rijal@example.com",
    "https://i.pravatar.cc/150?img=20",
  ],
];

async function seedDatabase() {
  await connectDB();

  const result = await User.bulkWrite(
    seedUsers.map(([clerkId, fullName, email, profilePic]) => ({
      updateOne: {
        filter: { clerkId },
        update: {
          $set: { clerkId, fullName, email, profilePic },
        },
        upsert: true,
      },
    })),
  );

  console.log(
    `Seeded users. Inserted: ${result.upsertedCount}, updated: ${result.modifiedCount}, matched: ${result.matchedCount}`,
  );
}

seedDatabase()
  .catch((error) => {
    console.error("Failed to seed users:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.connection.close();
  });