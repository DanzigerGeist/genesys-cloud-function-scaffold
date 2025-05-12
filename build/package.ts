/**
 * Main script for packaging the application.
 *
 * This script zips the bundled output file into a `.zip` archive and cleans up
 * the intermediate files. It provides clear logging for each step and handles
 * errors gracefully.
 *
 * @example
 * // Run the script to package the application:
 * deno run --allow-read --allow-write --allow-run build/package.ts
 *
 * @throws {Error} If the zipping process fails or an unexpected error occurs.
 */
if (import.meta.main) {
  const outputFile = "dist/index.js";
  const zipFile = "dist/lambda.zip";

  console.log(`🗜️ Zipping ${outputFile} into ${zipFile}...`);
  try {
    const zipCmd = new Deno.Command("zip", {
      args: ["-j", zipFile, outputFile],
    });
    const { code, stderr } = await zipCmd.output();
    if (code !== 0) {
      throw new Error(new TextDecoder().decode(stderr));
    }
    await Deno.remove(outputFile);
    console.log(`🧹 Cleaned up ${outputFile}`);
    console.log(`✅ Package complete: ${zipFile} is ready.`);
  } catch (error) {
    console.error("❌ Packaging failed: ", error);
    Deno.exit(1);
  }
}
