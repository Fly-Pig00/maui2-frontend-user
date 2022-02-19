function Checkbox({id, className, checked, children, onChange}) {
  let attributes = {
    id,
    type: 'checkbox',
    // defaultChecked: defaultChecked || false,
    onChange: onChange,
  };
  if (checked !== undefined && checked !== null) {
    attributes.checked = checked;
  }
  return (    
    <label className={`checkbox-container ${className}`}>
      <input {...attributes}/>
      <span className="checkmark"></span>
      {children}
    </label>
  )
}

export default Checkbox;