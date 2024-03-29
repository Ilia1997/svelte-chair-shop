// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { TypedSupabaseClient } from "@supabase/auth-helpers-sveltekit/dist/types";
import type { Session } from "@supabase/gotrue-js";
import type { AuthSession } from "@supabase/supabase-js";
import type { LayoutLoad } from "./routes/$types";

// and what to do when importing types
declare global {
   declare namespace App {
      interface Locals {
         sb: TypedSupabaseClient;
         session: AuthSession | null;
         shopingDetails: any;
      }

      interface Error {}
      interface Platform {}
      interface ISlides {
         title: string;
         heading: string;
         description: string;
         sale: number;
         link: string;
         image: string;
      }
      interface Supabase {
         Database: import("./DatabaseDefinitions").Database;
         SchemaName: "public";
      }
      interface PageData {
         session: import("@supabase/auth-helpers-sveltekit").SupabaseSession;
      }
   }
   namespace svelteHTML {
      interface HTMLAttributes<T> {
         content?: number | string | any;
      }
   }
   interface LayoutLoadWithSession extends LayoutLoad {
      session?: any;
   }

   interface UserEvent extends Event {
      UserId: string;
   }
   interface RouteParamsForUsers extends RouteParams {
      id: string;
   }
   declare module "svelte-carousel";
   declare module "swiper/swiper-bundle.esm.js";
}
