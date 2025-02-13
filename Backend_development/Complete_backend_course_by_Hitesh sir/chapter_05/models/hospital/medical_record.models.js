import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    hospitalName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    paitent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Paitent",
    },
    pescription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
