interface ButtonProps {
    width?: Number;
    height?: Number;
    color: string;
    textColor: string;
    size?: Number;
    children?: any;
    type: "button" | "submit" | "reset";
    onClick: string;
  }

  const container: HTMLElement | any = document.getElementById("app")

const buton = (props:ButtonProps) => {
    let output: string = `<button
    id="btn"
    onclick="${props.onClick}"
    type=${props.type}
    style="
      font-size: ${props.size}px;
      background-color: ${props.color};
      color: ${props.textColor};
      height:${props.height}px;
      width:${props.width}px;
      cursor:pointer;
    "
  >
    ${props.children}
  </button>`
  const node = document.getElementById('btn');
  container.innerHTML += output
}
buton({type:'button',textColor:'white', color:'red', width:50, height:30, onClick:"alert('aqui')", children:"button"});
buton({type:'button',textColor:'black', color:'yellow', width:100, height:30, size:18, onClick: "console.log('btn2')", children:"button2"});
