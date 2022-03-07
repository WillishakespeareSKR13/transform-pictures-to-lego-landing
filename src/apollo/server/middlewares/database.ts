import Mongoose from 'mongoose';

const connectMongo = async () => {
  try {
    await Mongoose.connect(
      'mongodb+srv://skr13:aUyu9I7mSon9xRZh@cluster0.8cm92.azure.mongodb.net/lego?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true'
    );
  } catch (error) {
    process.exit(1);
  }
};

export default connectMongo;
