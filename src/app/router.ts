import { Routes } from "@angular/router";
import { RoutePath } from "./routes";
import { LoginComponent } from "./login/login.component";

export const appRoutes: Routes = [
    {
        path: RoutePath.Login,
        component: LoginComponent,
    },
]