import { useState } from 'react';

export default function NewPost() {
  const [inputValue, setInputValue] = useState({
    title: '',
    content: '',
  });

  function inputHandler(e) {
    const { name, value } = e.target;
    // 保留其他的輸入值，並只更新當前輸入的值
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <h1>NewPost</h1>
      <p>Title</p>
      <input
        type="text"
        name="title"
        value={inputValue.title}
        onChange={inputHandler} // 不需要額外包裹函數
      />
      <p>Content</p>
      <input
        type="text"
        name="content"
        value={inputValue.content}
        onChange={inputHandler} // 不需要額外包裹函數
      />
    </>
  );
}
