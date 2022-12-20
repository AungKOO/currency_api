import getMonthlyRate from "../servcies/month";

export default async (req: any, res: any) => {
  console.log(req.params.id);
  const id = req.params.id;
  try {
    let data = await getMonthlyRate(id);

    return res.status(200).json(data);
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
};
