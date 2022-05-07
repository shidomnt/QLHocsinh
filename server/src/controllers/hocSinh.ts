import { Controller } from ".";
import { HocSinhModel } from "../models";

export const getDsHs: Controller = async (req, res) => {
  const { idGv } = req.params;
  const listHs = await HocSinhModel.find({ idGv });
  res.json({ listHs });
};
