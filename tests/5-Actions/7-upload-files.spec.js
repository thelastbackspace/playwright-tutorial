// Upload files
// You can select input files for upload using the locator.setInputFiles() method. It expects first argument to point to an input element with the type "file". Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the current working directory. Empty array clears the selected files.

// // Select one file
// await page.getByLabel('Upload file').setInputFiles(path.join(__dirname, 'myfile.pdf'));

// // Select multiple files
// await page.getByLabel('Upload files').setInputFiles([
//   path.join(__dirname, 'file1.txt'),
//   path.join(__dirname, 'file2.txt'),
// ]);

// // Remove all the selected files
// await page.getByLabel('Upload file').setInputFiles([]);

// // Upload buffer from memory
// await page.getByLabel('Upload file').setInputFiles({
//   name: 'file.txt',
//   mimeType: 'text/plain',
//   buffer: Buffer.from('this is test')
// });

// If you don't have input element in hand (it is created dynamically), you can handle the page.on('filechooser') event or use a corresponding waiting method upon your action:

// // Start waiting for file chooser before clicking. Note no await.
// const fileChooserPromise = page.waitForEvent('filechooser');
// await page.getByLabel('Upload file').click();
// const fileChooser = await fileChooserPromise;
// await fileChooser.setFiles(path.join(__dirname, 'myfile.pdf'));

import { test, expect } from "@playwright/test";
test("Simulate File Uploads", async ({ page }) => {
	// **Create a simple HTML page with upload elements**
	await page.setContent(`
    <label for="singleFile">Upload File:</label>
    <input type="file" id="singleFile" />
    <br>
    <label for="multipleFiles">Upload Multiple Files:</label>
    <input type="file" id="multipleFiles" multiple />
    <br>
    <label for="uploadFromBuffer">Upload from Buffer:</label>
    <input type="file" id="uploadFromBuffer" />
  `);

	const path = require("path");

	// **Simulate Uploading Files**

	// 1. Upload a single file (PDF)
	const singleFilePath = path.join(__dirname, "file.txt"); // Replace with your file path
	await page.getByLabel("Upload File:").setInputFiles(singleFilePath);

	// 2. Upload multiple files (text files)
	const multipleFilePaths = [
		path.join(__dirname, "file.txt"),
		path.join(__dirname, "file2.txt"),
	]; // Replace with your file paths
	await page
		.getByLabel("Upload Multiple Files:")
		.setInputFiles(multipleFilePaths);

	// 3. Upload data from memory (text buffer)
	const buffer = Buffer.from("This is some test data to upload");
	await page.getByLabel("Upload from Buffer:").setInputFiles({
		name: "file.txt",
		mimeType: "text/plain",
		buffer: buffer,
	});

	//  this code creates a virtual file in memory using Buffer, then uses page.getByLabel to find the upload element, and finally uses setInputFiles with the buffer object to simulate uploading the data as a file. This allows you to upload data generated in your test without needing a physical file on your machine.

	// You can add assertions here to verify upload success (e.g., confirmation message)
});
