import pages from "@pages";

type Router = {
  id: number;
  exact: boolean;
  path: string | string[];
  component: () => JSX.Element;
};

const router: Router[] = [
  {
    id: 1,
    exact: true,
    path: ["/", "/main"],
    component: pages.Main,
  },
  {
    id: 2,
    exact: true,
    path: "/login",
    component: pages.Login,
  },
  {
    id: 3,
    exact: true,
    path: "/detail",
    component: pages.Login,
  },
];

export default router;
