import { redirect } from "@sveltejs/kit";
async function load() {
  throw redirect(302, "/#globs");
}
export {
  load
};
