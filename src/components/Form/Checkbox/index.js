function Checkbox({id, className, defaultChecked, children, onChange}) {
  return (    
    <label className={`checkbox-container ${className}`}>
      <input id={id} type="checkbox" defaultChecked={defaultChecked || false} onChange={onChange}/>
      <span className="checkmark"></span>
      {children}
    </label>
  )
}

export default Checkbox;