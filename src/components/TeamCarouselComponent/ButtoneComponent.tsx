const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50px',
    height: '50px',
    border: '2px solid white',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    outline: 'none',
    margin: '0 5px'
  };
  
  const arrowStyle = {
    color: 'white',
    fontSize: '24px',
    lineHeight: '1'
  };
  
  interface Props {
    cbFunction: (increase: number) => void;
  }

  export default function Button({cbFunction}: Props) {
    return (
        <>
            <button onClick={() => {console.log('clicked'); cbFunction(-1)}} style={buttonStyle}>
                <span style={arrowStyle}>←</span>
            </button>        
            <button onClick={() => cbFunction(1)} style={buttonStyle}>
                <span style={arrowStyle}>→</span>
            </button>
        </>

    );
  }  