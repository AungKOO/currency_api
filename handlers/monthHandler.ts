// import getMonthlyRate from "../servcies/month";

export default async (req: any, res: any) => {
  console.log(req.params.id);
  const id = req.params.id;
  try {
    // let data = await getMonthlyRate();

    return res.status(200).json("hello");
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};
