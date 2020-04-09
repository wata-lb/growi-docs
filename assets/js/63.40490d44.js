(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{506:function(e,t,a){"use strict";a.r(t);var i=a(7),o=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"file-upload-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-upload-settings","aria-hidden":"true"}},[e._v("#")]),e._v(" File Upload Settings")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),a("li",[a("a",{attrs:{href:"#file-upload-destination"}},[e._v("File Upload Destination")])]),a("li",[a("a",{attrs:{href:"#limit-file-size"}},[e._v("Limit File Size")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("This chapter introduces how to change the destination to upload attachment files.")]),e._v(" "),a("h2",{attrs:{id:"file-upload-destination"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#file-upload-destination","aria-hidden":"true"}},[e._v("#")]),e._v(" File Upload Destination")]),e._v(" "),a("p",[e._v("The files attached to GROWI pages will be uploaded to MongoDB GridFS, AWS S3, Google Cloud Storage or local file system. The file upload destination depends on the environment variables described in the following sections.")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Warning: Changing the file upload destination will lose access to the previously uploaded files.")])]),e._v(" "),a("h3",{attrs:{id:"upload-files-to-mongodb-gridfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-files-to-mongodb-gridfs","aria-hidden":"true"}},[e._v("#")]),e._v(" Upload Files to MongoDB GridFS")]),e._v(" "),a("p",[e._v("Upload attached files to MongoDB server which stores data of GROWI app with "),a("a",{attrs:{href:"https://docs.mongodb.com/manual/core/gridfs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GridFS"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Set the following environment variable as below and rebuild the app.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("FILE_UPLOAD")]),e._v(" : 'mongodb'")])]),e._v(" "),a("h3",{attrs:{id:"upload-files-to-aws-s3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-files-to-aws-s3","aria-hidden":"true"}},[e._v("#")]),e._v(" Upload Files to AWS S3")]),e._v(" "),a("p",[e._v("Upload attached files to AWS S3 bucket specified in AWS setting in App Settings page.")]),e._v(" "),a("p",[e._v("Set the following environment variable as below and rebuild the app. This is the default setting.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("FILE_UPLOAD")]),e._v(" : 'aws' (Default)")])]),e._v(" "),a("p",[e._v("If the AWS S3 bucket setup has not been completed, refer to "),a("router-link",{attrs:{to:"/en/admin-guide/management-cookbook/aws-s3-bucket-setting.html"}},[e._v("AWS S3 Bucket Setting")]),e._v(" to set it up.")],1),e._v(" "),a("h3",{attrs:{id:"upload-files-to-google-cloud-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-files-to-google-cloud-storage","aria-hidden":"true"}},[e._v("#")]),e._v(" Upload Files to Google Cloud Storage")]),e._v(" "),a("p",[e._v("Upload attached files to Google Cloud Storage specified in environment variables. The setting procedure is as follows.")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Refer to "),a("a",{attrs:{href:"https://cloud.google.com/iam/docs/creating-managing-service-account-keys",target:"_blank",rel:"noopener noreferrer"}},[e._v("GCP Docs"),a("OutboundLink")],1),e._v(" and get the JSON file of GCP service account.")])]),e._v(" "),a("li",[a("p",[e._v("Set the following environment variables as below and rebuild the app.")])])]),e._v(" "),a("ul",[a("li",[a("code",[e._v("FILE_UPLOAD")]),e._v(" : 'gcs'")]),e._v(" "),a("li",[a("code",[e._v("GCS_API_KEY_JSON_PATH")]),e._v(" : [Path of the JSON file of GCP service account key (as seen from the root directory of GROWI server)]")]),e._v(" "),a("li",[a("code",[e._v("GCS_BUCKET")]),e._v(" : [GCS bucket name]")])]),e._v(" "),a("h3",{attrs:{id:"upload-files-to-local-file-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upload-files-to-local-file-system","aria-hidden":"true"}},[e._v("#")]),e._v(" Upload Files to Local File System")]),e._v(" "),a("p",[e._v("Upload attached files to local file system as seen from the root directory of GROWI server.")]),e._v(" "),a("p",[e._v("Set the following environment variable as below and rebuild the app.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("FILE_UPLOAD")]),e._v(" : 'local'")])]),e._v(" "),a("h2",{attrs:{id:"limit-file-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#limit-file-size","aria-hidden":"true"}},[e._v("#")]),e._v(" Limit File Size")]),e._v(" "),a("p",[e._v("In the default setting, both the total file size attached to all pages and the maximum file size that can be uploaded at once are unlimited.")]),e._v(" "),a("p",[e._v("In order to limit these sizes, set the following environment variables as below and rebuild the app.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("MAX_FILE_SIZE")]),e._v(" : [The upper limit of uploadable file size (bytes)]")]),e._v(" "),a("li",[a("code",[e._v("FILE_UPLOAD_TOTAL_LIMIT")]),e._v(" : [The upper limit of the total size of attached files in DB (bytes)]")])])])},[],!1,null,null,null);t.default=o.exports}}]);