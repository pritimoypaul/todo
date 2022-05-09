import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 50,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Todo", TodoSchema);
