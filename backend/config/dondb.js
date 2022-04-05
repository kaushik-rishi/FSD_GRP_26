import mongose from 'mongoose'
import colors from 'colors'

// a mongoose stuf (mongoose.connect ....) return always a promise
const connectDonDB = async () => {
  try {
    const conn = await mongose.connect(
    //   'mongodb+srv://kaushikrishi:Kamal_123@cluster0.pjncu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    'mongodb://localhost:27017/',
      {
        dbName: "donations",
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    )
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDonDB
