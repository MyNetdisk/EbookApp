import { NavigationKeys } from "./NavigationKeys";
import BookShelf from "../pages/Shelf";

// 定义路由名称及其参数类型
export type RootStackParamList = {
    BookShelf: {
        page_id: string;
    };
}

/**
 * 路由配置
 */
export const routes: {
    name: string,
    component: ({ navigation, route }: any) => JSX.Element,
}[] = [
        { name: NavigationKeys.BookShelf, component: BookShelf },
    ]