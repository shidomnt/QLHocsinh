import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SchoolIcon from "@mui/icons-material/School";
import { SvgIconComponent } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";

export interface SidebarDataT {
  title: string;
  icon: React.ReactElement<SvgIconComponent>;
  link: string;
}

export const SidebarDataTeacher: SidebarDataT[] = [
  {
    title: "Trang chủ",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Điểm danh",
    icon: <CalendarMonthIcon />,
    link: "/attendance",
  },
  {
    title: "Lớp học",
    icon: <SchoolIcon />,
    link: "/teacher",
  },
  {
    title: "Cài đặt",
    icon: <SettingsIcon />,
    link: "/setting",
  },
];
