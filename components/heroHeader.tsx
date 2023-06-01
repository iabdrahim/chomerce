import Link from "next/link";
import React from "react";
import {
  Console,
  Camera,
  Cpu,
  Router,
  Harddisk,
  Monitor,
  Gadget,
  Gadget2,
  Mouse,
  TV,
} from "./icons/ctagories";

export default function HeroHeader() {
  let catagories = [
    { name: "Camera", icon: <Camera />, color: "blue" },
    { name: "Console", icon: <Console />, color: "green" },
    { name: "Cpu", icon: <Cpu />, color: "green2" },
    { name: "Gadget", icon: <Gadget />, color: "pink" },
    { name: "Gadget Accessoris", icon: <Gadget2 />, color: "brown" },
    { name: "HardDisk", icon: <Harddisk />, color: "red" },
    { name: "Monitor", icon: <Monitor />, color: "voilet" },
    { name: "Mouse", icon: <Mouse />, color: "blue2" },
    { name: "TV", icon: <TV />, color: "orange" },
    { name: "Router", icon: <Router />, color: "indigo" },
  ];
  return (
    <header className="w-full mt-4 flex justify-between flex-wrap items-start gap-4">
      {catagories.map((ctg: any) => (
        <Ctg key={ctg.name} color={ctg.color} name={ctg.name} icon={ctg.icon} />
      ))}
    </header>
  );
}

let Ctg = ({
  color,
  name,
  icon,
}: {
  color: string;
  name: string;
  icon: any;
}) => {
  return (
    <Link href={"/" + name}>
      <div
        key={name}
        className="ctg flex flex-col gap-3 justify-start items-center"
      >
        <div className={`card bg-opacity-20 ${color}`}>{icon}</div>
        <h4 className={`${color} bg-opacity-10`}>{name}</h4>
      </div>
    </Link>
  );
};
