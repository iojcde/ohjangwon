"use server";
import { db } from "@/lib/db";

export const getHearts = async () => {
  return await db.like.count();
};

export const addHeart = async () => {
  await db.like.create({});
  return await db.like.count();
};
