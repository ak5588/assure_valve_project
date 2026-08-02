import circularWeld from "@/assets/gallery/circular_weld.png";
import cncMachining from "@/assets/gallery/cnc_machining.png";
import cncMachining1 from "@/assets/gallery/cnc_machining1.png";
import couplingAndThreading from "@/assets/gallery/coupling_and_threading.png";
import coupling from "@/assets/gallery/coupling.png";
import dpTest from "@/assets/gallery/dp_test.png";
import gasWeld from "@/assets/gallery/gas_weld.png";
import longSlotBlock from "@/assets/gallery/long_slot_block.png";
import plasticMachineDie from "@/assets/gallery/plastic_machine_die.png";
import plasticMachinePunch from "@/assets/gallery/plastic_machine_punch.png";
import plasticMachineTop from "@/assets/gallery/plastic_machine_top.png";
import rainbowWeld from "@/assets/gallery/rainbow_weld.png";
import shaft from "@/assets/gallery/shaft.png";
import spiralWeld from "@/assets/gallery/spiral_weld.png";
import thermalSprayGun from "@/assets/gallery/thermal_spray_gun.png";
import valveCage from "@/assets/gallery/valve_cage.png";
import vmcMachining1 from "@/assets/gallery/vmc_machining1.png";
import vmcMachning from "@/assets/gallery/vmc_machning.png";
import welder from "@/assets/gallery/welder.png";
import weldingRepair from "@/assets/gallery/welding_repair.png";

export type GalleryCategory =
  | "All"
  | "CNC Machining"
  | "VMC Machining"
  | "Valve Components"
  | "Welding"
  | "Repair"
  | "Inspection"
  | "Thermal Spray"
  | "Finished Components";

export interface GalleryImage {
  id: string;
  title: string;
  category: GalleryCategory;
  description: string;
  image: string;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "All",
  "CNC Machining",
  "VMC Machining",
  "Valve Components",
  "Welding",
  "Repair",
  "Inspection",
  "Thermal Spray",
  "Finished Components",
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "cnc_machining",
    title: "CNC Machining",
    category: "CNC Machining",
    description: "Precision CNC turning of a large industrial component.",
    image: cncMachining,
  },
  {
    id: "vmc_machning",
    title: "VMC Machining",
    category: "VMC Machining",
    description: "Multi-axis VMC machining setup for complex geometries.",
    image: vmcMachning,
  },
  {
    id: "cnc_machining1",
    title: "Precision CNC Turning",
    category: "CNC Machining",
    description: "High-tolerance CNC turning operation on a metallic shaft.",
    image: cncMachining1,
  },
  {
    id: "vmc_machining1",
    title: "Heavy VMC Machining",
    category: "VMC Machining",
    description: "Heavy-duty vertical milling of an industrial block.",
    image: vmcMachining1,
  },
  {
    id: "circular_weld",
    title: "Circular Weld",
    category: "Welding",
    description: "Automated circular welding process for robust joining.",
    image: circularWeld,
  },
  {
    id: "rainbow_weld",
    title: "Stellite Weld Overlay",
    category: "Welding",
    description: "Hard-facing stellite overlay for high-wear resistance.",
    image: rainbowWeld,
  },
  {
    id: "gas_weld",
    title: "Gas Welding",
    category: "Welding",
    description: "Manual gas welding operation by a skilled technician.",
    image: gasWeld,
  },
  {
    id: "welder",
    title: "Industrial Welder",
    category: "Welding",
    description: "Certified welder performing critical fabrication work.",
    image: welder,
  },
  {
    id: "valve_cage",
    title: "Valve Cage",
    category: "Valve Components",
    description: "Precision-machined valve cage for flow control applications.",
    image: valveCage,
  },
  {
    id: "coupling",
    title: "Industrial Coupling",
    category: "Finished Components",
    description: "Machined industrial coupling ready for assembly.",
    image: coupling,
  },
  {
    id: "coupling_and_threading",
    title: "Precision Threading",
    category: "CNC Machining",
    description: "Detailed threading work on an industrial coupling.",
    image: couplingAndThreading,
  },
  {
    id: "dp_test",
    title: "Dye Penetrant Inspection",
    category: "Inspection",
    description: "Non-destructive DP testing to detect surface flaws.",
    image: dpTest,
  },
  {
    id: "long_slot_block",
    title: "Long Slot Block",
    category: "Finished Components",
    description: "Custom machined block featuring precise long slots.",
    image: longSlotBlock,
  },
  {
    id: "plastic_machine_die",
    title: "Plastic Machine Die",
    category: "Finished Components",
    description: "Precision die manufactured for plastic processing machinery.",
    image: plasticMachineDie,
  },
  {
    id: "plastic_machine_punch",
    title: "Plastic Machine Punch",
    category: "Finished Components",
    description: "High-durability punch tool for industrial use.",
    image: plasticMachinePunch,
  },
  {
    id: "plastic_machine_top",
    title: "Plastic Machine Top Plate",
    category: "Finished Components",
    description: "Machined top plate for a plastic molding machine.",
    image: plasticMachineTop,
  },
  {
    id: "shaft",
    title: "Precision Shaft",
    category: "Finished Components",
    description: "Turned and ground precision shaft for heavy machinery.",
    image: shaft,
  },
  {
    id: "spiral_weld",
    title: "Spiral Weld Repair",
    category: "Repair",
    description: "Specialized spiral welding repair on a worn component.",
    image: spiralWeld,
  },
  {
    id: "thermal_spray_gun",
    title: "Thermal Spray Coating",
    category: "Thermal Spray",
    description: "Application of protective thermal spray coating.",
    image: thermalSprayGun,
  },
  {
    id: "welding_repair",
    title: "Valve Repair Process",
    category: "Repair",
    description: "Extensive welding and repair on an industrial valve body.",
    image: weldingRepair,
  },
];
