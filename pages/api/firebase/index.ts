import { NextApiRequest, NextApiResponse } from "next";

import { GoodItem } from "../../../types/Goods.types";
import { db } from "../../../utils/db";

export default async function fireBaseEndpoints(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const goodsRef = db.collection("goods");

  const { id } = req.body;

  try {
    if (id) {
      const goodSnapshot = await goodsRef.doc(id).get();

      const good = goodSnapshot.data();

      return res.status(200).send(good);
    }

    const goodsSnapshot = await goodsRef.get();

    const goods: GoodItem[] = [];

    goodsSnapshot.forEach((doc) => {
      const walletData = doc.data() as GoodItem;
      goods.push(walletData);
    });
    res.status(200).send(goods);
  } catch (e) {
    res.status(400).send(e);
  }
}
