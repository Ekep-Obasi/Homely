// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { Form, FormField, FormItem, FormLabel, Input } from "shadcn-ui/components/form";

// const FileUpload = () => {
//   const [files, setFiles] = useState([]);
//   const form = useForm();

//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);
//     setFiles(files);
//   };

//   const onSubmit = () => {
//     const formData = new FormData();
//     files.forEach((file) => {
//       formData.append("files", file);
//     });

//     // Post the form data to the backend
//     fetch("/api/upload", {
//       method: "POST",
//       body: formData,
//     });
//   };

//   return (
//     <Form onSubmit={form.handleSubmit(onSubmit)}>
//       <FormField name="files">
//         <FormItem>
//           <FormLabel>Files</FormLabel>
//           <Input type="file" multiple={true} onChange={handleFileChange} />
//         </FormItem>
//       </FormField>
//       <FormItem>
//         <Button type="submit">Upload</Button>
//       </FormItem>
//     </Form>
//   );
// };

// export default FileUpload;


// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Form, FormField, FormItem, Input, Button } from "shadcn-ui";

// const FileUpload = () => {
//   const [files, setFiles] = useState([]);
//   const form = useForm();

//   const onSubmit = async () => {
//     const formData = new FormData();
//     files.forEach((file) => {
//       formData.append("files", file);
//     });

//     await fetch("/api/upload", {
//       method: "POST",
//       body: formData,
//     });
//   };

//   return (
//     <Form onSubmit={form.handleSubmit(onSubmit)}>
//       <FormField name="files" render={({ field }) => (
//         <FormItem>
//           <Input type="file" multiple={true} {...field} />
//         </FormItem>
//       )} />
//       <Button type="submit">Upload</Button>
//     </Form>
//   );
// };

// export default FileUpload;
