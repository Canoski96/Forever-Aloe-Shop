"use client";
import { config } from "@/sanity.config";
import { NextStudio } from "next-sanity/studio";
import React from "react";

const StudioPage = () => {
  return <NextStudio config={config} />;
};

export default StudioPage;
