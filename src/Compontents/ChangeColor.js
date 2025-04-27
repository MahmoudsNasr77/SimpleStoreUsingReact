import { useState, useRef } from 'react';
import './Changecolor.css'

function ColorBox() {
    const [color, setColor] = useState('white');
    const colorInputRef = useRef(null);  // استخدام useRef للوصول إلى العنصر
  
    // دالة لإعادة اللون الافتراضي
    const resetColor = () => {
      setColor('white');
      if (colorInputRef.current) {
        colorInputRef.current.value = '';  // إعادة قيمة الـ input إلى فارغ
      }
    };
  
    // دالة لتغيير اللون حسب النص المدخل
    const handleColorChange = (e) => {
      setColor(e.target.value);
    };
  
    return (
      <div className="color-box" style={{ backgroundColor: color }}>
        <input 
          type="text" 
          placeholder="Enter Color" 
          onChange={handleColorChange} 
          value={color} // لضمان أن الـ input يعكس اللون الحالي
          ref={colorInputRef}  // استخدام ref هنا للوصول إلى الـ input
          className="color-input"
        />
        <button onClick={resetColor} className="reset-button">Reset Color</button>
      </div>
    );
  }
  
  export default ColorBox;