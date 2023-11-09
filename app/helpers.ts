import { IItem, IbreadcrumbItem, NavItem } from "./model";

export const navItems: NavItem[] = [
  {
    label: "Дома",
    href: "/",
  },
  {
    label: "Сите Производи",
    href: "/products",
  },
  {
    label: "Категории",
    href: "/categories",
  },
];

export const defaultBreadcrumbItems: IbreadcrumbItem[] = [
  {
    name: "Производи",
    link: "/products",
  },
  {
    name: "Категории",
    link: "/categories",
  },
];

export const getSubstring = (text: string, substringEnd: number): string => {
  return text.length > substringEnd
    ? `${text.substring(0, substringEnd)}...`
    : text;
};

export const calculateItemsTotal = (items: IItem[]): number => {
  return items
    .map((item) => ({ price: item.price, count: item.count }))
    .reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.count,
      0
    );
};

export const formatPrice = (value: number): string => {
  return value.toFixed(2);
};
