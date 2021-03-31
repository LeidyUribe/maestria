interface ButtonProps {
    width?: Number;
    height?: Number;
    color: string;
    textColor: string;
    size?: Number;
    children?: any;
    type: "button" | "submit" | "reset";
    onClick: any;
  }

  const container: HTMLElement | any = document.getElementById("app")

const buton = (props:ButtonProps) => {
    let output: string = `<button
    id="btn"
    type=${props.type}
    onClick= ${props.onClick}
    style="
      font-size: ${props.size}px;
      background-color: ${props.color};
      color: ${props.textColor};
      height:${props.height}px;
      width:${props.width}px;
    "
  >
    ${props.children}
  </button>`
  const node = document.getElementById('btn');
  container.innerHTML += output
}
buton({type:'button',textColor:'white', color:'red', width:50, height:30, onClick: () => {alert('aqui')}, children:"button"});
buton({type:'button',textColor:'black', color:'yellow', width:80, height:30, size:18, onClick: () => {alert('aqui')}, children:"button"});
