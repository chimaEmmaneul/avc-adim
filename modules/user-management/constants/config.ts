export const modules = {
  toolbar: [
    [{ undo: "undo" }, { redo: "redo" }],

    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],
    [{ script: "sub" }, { script: "super" }],

    [{ font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    [{ color: [] }, { background: [] }],

    [{ align: [] }],
    [{ direction: "rtl" }],

    [{ list: "ordered" }, { list: "bullet" }],
    [{ indent: "-1" }, { indent: "+1" }],

    ["link"],

    ["table"],

    ["blockquote"],

    ["formula"],
    ["omega"],

    ["code-block"],
    ["source"],

    [{ "choose-lang": ["javascript", "html", "css", "python"] }],

    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};
