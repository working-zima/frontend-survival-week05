import TextField from './TextField';

type SearchBarProps = {
  text: string;
  setText: (text: string) => void;
}

function SearchBar({ text, setText }: SearchBarProps) {
  return (
    <div>
      <TextField
        label="검색"
        placeholder="식당 이름"
        text={text}
        setText={setText}
      />
    </div>
  );
}

export default SearchBar;
