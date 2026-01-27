import React, { useState } from 'react';

// 麵包與甜點商品數據（加入詳細介紹）
const products = [
  { 
    id: 1, 
    name: '法式可頌', 
    price: 75, 
    image: '🥐', 
    description: '層層酥脆・法國奶油', 
    category: '麵包', 
    badge: '招牌',
    fullDescription: '採用法國進口 AOP 認證奶油，經過72小時低溫發酵，手工反覆折疊27層，烘烤後外層金黃酥脆，內層柔軟蓬鬆，奶油香氣四溢。每一口都是法式經典的完美呈現。',
    ingredients: '法國奶油、高筋麵粉、天然酵母、海鹽、牛奶',
    storage: '常溫保存2天，冷凍可保存14天',
    calories: '約 280 大卡'
  },
  { 
    id: 2, 
    name: '經典長棍', 
    price: 95, 
    image: '🥖', 
    description: '外酥內軟・傳統工法', 
    category: '麵包', 
    badge: '',
    fullDescription: '遵循法國傳統工法製作，僅使用麵粉、水、鹽、酵母四種原料。外皮烤至金黃酥脆，輕敲會發出清脆聲響，內部組織充滿大小不一的氣孔，散發天然麥香。',
    ingredients: '法國麵粉、水、天然酵母、海鹽',
    storage: '當日食用最佳，可切片冷凍保存7天',
    calories: '約 320 大卡'
  },
  { 
    id: 3, 
    name: '酸種麵包', 
    price: 180, 
    image: '🍞', 
    description: '48小時發酵・天然酵母', 
    category: '麵包', 
    badge: '職人手作',
    fullDescription: '使用培養超過5年的老麵種，經過48小時以上的長時間低溫發酵，讓麵包產生獨特的微酸風味與複雜的香氣層次。外皮厚實有嚼勁，內部濕潤Q彈。',
    ingredients: '有機石磨麵粉、水、天然老麵種、海鹽',
    storage: '常溫保存5天，切片冷凍可保存30天',
    calories: '約 180 大卡/片'
  },
  { 
    id: 4, 
    name: '布里歐', 
    price: 120, 
    image: '🧈', 
    description: '奶油香濃・柔軟綿密', 
    category: '麵包', 
    badge: '',
    fullDescription: '法式經典奶油麵包，使用大量奶油與雞蛋製作，質地柔軟如雲朵，入口即化。淡淡的奶香與蛋香完美融合，是早餐或下午茶的最佳選擇。',
    ingredients: '法國奶油、雞蛋、高筋麵粉、牛奶、糖、天然酵母',
    storage: '常溫保存3天，密封冷凍可保存14天',
    calories: '約 340 大卡'
  },
  { 
    id: 5, 
    name: '閃電泡芙', 
    price: 145, 
    image: '🍫', 
    description: '比利時巧克力・卡士達', 
    category: '甜點', 
    badge: '主廚推薦',
    fullDescription: '經典法式閃電泡芙，酥脆的泡芙外殼填入滑順的香草卡士達醬，表面淋上70%比利時黑巧克力，三種口感與風味的完美結合。',
    ingredients: '比利時巧克力、鮮奶油、香草莢、雞蛋、奶油、麵粉',
    storage: '冷藏保存2天，不建議冷凍',
    calories: '約 260 大卡'
  },
  { 
    id: 6, 
    name: '季節水果塔', 
    price: 165, 
    image: '🥧', 
    description: '杏仁奶油餡・當季鮮果', 
    category: '甜點', 
    badge: '季節限定',
    fullDescription: '酥脆的杏仁塔皮，填入香濃的杏仁奶油餡，鋪上當季新鮮水果。目前使用草莓、藍莓、奇異果等時令水果，每一口都是新鮮與甜蜜的享受。',
    ingredients: '杏仁粉、奶油、雞蛋、當季水果、糖粉',
    storage: '冷藏保存2天，建議當日食用',
    calories: '約 320 大卡'
  },
  { 
    id: 7, 
    name: '馬卡龍', 
    price: 85, 
    image: '🧁', 
    description: '法式杏仁餅・六種口味', 
    category: '甜點', 
    badge: '',
    fullDescription: '正統法式馬卡龍，外殼酥脆、內餡軟糯。提供六種口味：玫瑰荔枝、焦糖海鹽、抹茶、覆盆莓、檸檬、巧克力。每顆都是色彩與味覺的藝術品。',
    ingredients: '杏仁粉、蛋白、糖、天然色素、各式風味內餡',
    storage: '冷藏保存5天，冷凍可保存30天',
    calories: '約 90 大卡/顆'
  },
  { 
    id: 8, 
    name: '千層派', 
    price: 175, 
    image: '🍰', 
    description: '酥皮千層・香草奶醬', 
    category: '甜點', 
    badge: '經典',
    fullDescription: '傳統法式千層派，層層酥脆的派皮經過反覆折疊擀壓，夾入以馬達加斯加香草莢熬煮的卡士達醬，灑上糖粉焦糖化，口感層次豐富。',
    ingredients: '法國奶油、麵粉、香草莢、鮮奶、雞蛋、糖',
    storage: '冷藏保存2天，不建議冷凍',
    calories: '約 380 大卡'
  },
  { 
    id: 9, 
    name: '歌劇院蛋糕', 
    price: 195, 
    image: '🎂', 
    description: '咖啡巧克力・杏仁海綿', 
    category: '蛋糕', 
    badge: '人氣王',
    fullDescription: '經典法式甜點之王，由杏仁海綿蛋糕、咖啡糖漿、咖啡奶油餡、巧克力甘納許層層堆疊而成。咖啡的苦、巧克力的甜、杏仁的香完美平衡。',
    ingredients: '杏仁粉、可可粉、咖啡、鮮奶油、黑巧克力、雞蛋',
    storage: '冷藏保存3天',
    calories: '約 420 大卡/片'
  },
  { 
    id: 10, 
    name: '巴斯克乳酪', 
    price: 165, 
    image: '🧀', 
    description: '焦香表面・濃郁內餡', 
    category: '蛋糕', 
    badge: '',
    fullDescription: '源自西班牙巴斯克地區的經典甜點，表面烤至焦黑，內部卻是滑嫩濃郁的乳酪餡。使用法國進口奶油乳酪，口感介於生乳酪與熟乳酪之間。',
    ingredients: '奶油乳酪、鮮奶油、雞蛋、糖、少許麵粉',
    storage: '冷藏保存5天',
    calories: '約 350 大卡/片'
  },
];

// 最新消息數據
const newsItems = [
  {
    id: 1,
    date: '2025/01/25',
    title: '春節禮盒預購開跑！',
    content: '精選招牌商品組合，送禮自用兩相宜。1/31 前預購享 85 折優惠。',
    tag: '優惠'
  },
  {
    id: 2,
    date: '2025/01/20',
    title: '新品上市：草莓季限定商品',
    content: '使用苗栗大湖新鮮草莓，推出草莓可頌、草莓塔、草莓生乳捲等限定商品。',
    tag: '新品'
  },
  {
    id: 3,
    date: '2025/01/15',
    title: '門市營業時間調整公告',
    content: '春節期間（1/28-2/2）營業時間調整為 09:00-18:00，造成不便敬請見諒。',
    tag: '公告'
  },
];

// 公告數據
const announcements = [
  '🎉 新會員首購享 9 折優惠',
  '🚚 滿 $500 免運費',
  '🍰 每週三會員日享雙倍積分',
  '🎁 生日當月憑證享免費蛋糕一份',
];

const categories = ['全部', '麵包', '甜點', '蛋糕'];

export default function BakeryShop() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [notification, setNotification] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentAnnouncementIndex, setCurrentAnnouncementIndex] = useState(0);
  
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  
  const [registerForm, setRegisterForm] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    newsletter: true,
    agreeTerms: false,
  });

  const [formErrors, setFormErrors] = useState({});

  // 公告輪播
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncementIndex(prev => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const filteredProducts = selectedCategory === '全部' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 2500);
  };

  const addToCart = (product, quantity = 1) => {
    if (!isLoggedIn) {
      showNotification('請先登入以加入商品');
      setShowLogin(true);
      return;
    }
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
    showNotification(`已將 ${product.name} 加入購物袋`);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const validateRegister = () => {
    const errors = {};
    if (!registerForm.lastName.trim()) errors.lastName = '請輸入姓氏';
    if (!registerForm.firstName.trim()) errors.firstName = '請輸入名字';
    if (!registerForm.email.trim()) errors.email = '請輸入電子郵件';
    else if (!/\S+@\S+\.\S+/.test(registerForm.email)) errors.email = '電子郵件格式不正確';
    if (!registerForm.phone.trim()) errors.phone = '請輸入手機號碼';
    else if (!/^09\d{8}$/.test(registerForm.phone)) errors.phone = '請輸入有效的手機號碼';
    if (!registerForm.password) errors.password = '請輸入密碼';
    else if (registerForm.password.length < 8) errors.password = '密碼至少需要8個字元';
    if (registerForm.password !== registerForm.confirmPassword) errors.confirmPassword = '密碼不一致';
    if (!registerForm.birthDate) errors.birthDate = '請選擇生日';
    if (!registerForm.agreeTerms) errors.agreeTerms = '請同意服務條款';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginForm.email && loginForm.password) {
      setIsLoggedIn(true);
      setCurrentUser(loginForm.email.split('@')[0]);
      setShowLogin(false);
      setLoginForm({ email: '', password: '' });
      showNotification('歡迎回來！');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validateRegister()) {
      setIsLoggedIn(true);
      setCurrentUser(registerForm.lastName + registerForm.firstName);
      setShowRegister(false);
      setRegisterForm({
        lastName: '', firstName: '', email: '', phone: '', password: '', confirmPassword: '',
        birthDate: '', newsletter: true, agreeTerms: false,
      });
      showNotification(`歡迎加入，${registerForm.lastName}${registerForm.firstName}！`);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser('');
    setCart([]);
    showNotification('期待您再次光臨！');
  };

  const handleCheckout = () => {
    setCheckoutComplete(true);
    setTimeout(() => {
      setCart([]);
      setShowCart(false);
      setCheckoutComplete(false);
      showNotification('訂單已成功送出！感謝您的購買');
    }, 2000);
  };

  // 精緻華麗配色
  const theme = {
    bg: darkMode ? '#1a1612' : '#fdfbf7',
    bgSecondary: darkMode ? '#231f1a' : '#ffffff',
    bgTertiary: darkMode ? '#2a241d' : '#faf7f2',
    bgCard: darkMode ? '#252019' : '#ffffff',
    text: darkMode ? '#f5f0e8' : '#2c2416',
    textSecondary: darkMode ? '#a89880' : '#6b5c4a',
    textMuted: darkMode ? '#6b5c4a' : '#a89880',
    border: darkMode ? '#3d352a' : '#e8e0d4',
    borderLight: darkMode ? '#2f2820' : '#f0ebe3',
    borderGold: darkMode ? '#c9a962' : '#d4b87a',
    accent: darkMode ? '#f5f0e8' : '#2c2416',
    accentBg: darkMode ? '#f5f0e8' : '#2c2416',
    accentText: darkMode ? '#1a1612' : '#fdfbf7',
    gold: '#c9a962',
    goldLight: '#d4bc7a',
    goldDark: '#a68a4a',
    cream: darkMode ? '#2a241d' : '#faf6ef',
    warmWhite: darkMode ? '#1f1b16' : '#fffdf8',
  };

  // 裝飾性 SVG 組件
  const OrnamentDivider = ({ width = 200 }) => (
    <svg width={width} height="20" viewBox="0 0 200 20" style={{ display: 'block', margin: '0 auto' }}>
      <path d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10" fill="none" stroke={theme.gold} strokeWidth="1" opacity="0.5"/>
      <circle cx="100" cy="10" r="3" fill={theme.gold} opacity="0.8"/>
      <circle cx="70" cy="10" r="1.5" fill={theme.gold} opacity="0.5"/>
      <circle cx="130" cy="10" r="1.5" fill={theme.gold} opacity="0.5"/>
    </svg>
  );

  const CornerOrnament = ({ position }) => {
    const transforms = {
      topLeft: 'rotate(0)',
      topRight: 'rotate(90)',
      bottomRight: 'rotate(180)',
      bottomLeft: 'rotate(270)',
    };
    const positions = {
      topLeft: { top: 0, left: 0 },
      topRight: { top: 0, right: 0 },
      bottomRight: { bottom: 0, right: 0 },
      bottomLeft: { bottom: 0, left: 0 },
    };
    return (
      <svg 
        width="60" 
        height="60" 
        viewBox="0 0 60 60" 
        style={{ 
          position: 'absolute', 
          ...positions[position],
          opacity: 0.3,
          transform: transforms[position],
          transformOrigin: 'center',
        }}
      >
        <path d="M0 0 L0 30 Q0 0 30 0" fill="none" stroke={theme.gold} strokeWidth="1.5"/>
        <path d="M0 0 L0 20 Q0 0 20 0" fill="none" stroke={theme.gold} strokeWidth="1"/>
        <circle cx="8" cy="8" r="2" fill={theme.gold}/>
      </svg>
    );
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: theme.bg,
      color: theme.text,
      fontFamily: "'Noto Serif TC', 'Georgia', serif",
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
    }}>
      {/* 裝飾背景 */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}>
        {/* 優雅花紋背景 */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(ellipse at 20% 20%, ${darkMode ? 'rgba(201, 169, 98, 0.03)' : 'rgba(201, 169, 98, 0.05)'} 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, ${darkMode ? 'rgba(201, 169, 98, 0.03)' : 'rgba(201, 169, 98, 0.05)'} 0%, transparent 50%)
          `,
        }} />
        
        {/* 精緻圓環裝飾 */}
        <svg style={{ position: 'absolute', top: '5%', right: '8%', opacity: 0.08 }} width="350" height="350" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" fill="none" stroke={theme.gold} strokeWidth="0.3"/>
          <circle cx="50" cy="50" r="40" fill="none" stroke={theme.gold} strokeWidth="0.5"/>
          <circle cx="50" cy="50" r="32" fill="none" stroke={theme.gold} strokeWidth="0.3"/>
          {[...Array(12)].map((_, i) => (
            <circle key={i} cx={50 + 44 * Math.cos(i * Math.PI / 6)} cy={50 + 44 * Math.sin(i * Math.PI / 6)} r="1.5" fill={theme.gold}/>
          ))}
        </svg>

        {/* 底部裝飾 */}
        <svg style={{ position: 'absolute', bottom: '10%', left: '5%', opacity: 0.06 }} width="300" height="300" viewBox="0 0 100 100">
          <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke={theme.gold} strokeWidth="0.5"/>
          <path d="M50 15 L85 50 L50 85 L15 50 Z" fill="none" stroke={theme.gold} strokeWidth="0.3"/>
          <path d="M50 25 L75 50 L50 75 L25 50 Z" fill="none" stroke={theme.gold} strokeWidth="0.2"/>
        </svg>

        {/* 細緻點狀紋理 */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(${theme.border} 0.5px, transparent 0.5px)`,
          backgroundSize: '24px 24px',
          opacity: 0.5,
        }} />
      </div>

      {/* 通知 */}
      {notification && (
        <div style={{
          position: 'fixed',
          top: 80,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: theme.gold,
          color: '#fff',
          padding: '16px 40px',
          borderRadius: 4,
          fontSize: 14,
          fontWeight: 500,
          zIndex: 1000,
          animation: 'slideDown 0.4s ease',
          letterSpacing: 1,
          fontFamily: "'Noto Sans TC', sans-serif",
          boxShadow: '0 8px 32px rgba(201, 169, 98, 0.3)',
        }}>
          {notification}
        </div>
      )}

      {/* 頂部公告輪播 */}
      <div style={{
        background: `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldDark} 100%)`,
        color: '#fff',
        padding: '12px 20px',
        textAlign: 'center',
        fontSize: 13,
        letterSpacing: 2,
        fontFamily: "'Noto Sans TC', sans-serif",
        position: 'relative',
        zIndex: 100,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
        }}>
          <span style={{ opacity: 0.8 }}>✦</span>
          <span style={{ animation: 'fadeInOut 4s ease infinite' }}>
            {announcements[currentAnnouncementIndex]}
          </span>
          <span style={{ opacity: 0.8 }}>✦</span>
        </div>
      </div>

      {/* 頂部導航 */}
      <header style={{
        position: 'sticky',
        top: 0,
        backgroundColor: darkMode ? 'rgba(26,22,18,0.97)' : 'rgba(253,251,247,0.97)',
        borderBottom: `1px solid ${theme.border}`,
        padding: '20px 48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        backdropFilter: 'blur(20px)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 60 }}>
          {/* Logo */}
          <div style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => setSelectedProduct(null)}>
            <p style={{
              fontSize: 10,
              letterSpacing: 5,
              color: theme.gold,
              margin: '0 0 6px 0',
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              ─ 手工烘焙坊 ─
            </p>
            <h1 style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: 10,
              margin: 0,
              color: theme.text,
            }}>
              麥香小屋
            </h1>
            <p style={{
              fontSize: 9,
              letterSpacing: 4,
              margin: '6px 0 0 0',
              color: theme.textMuted,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              創立於 2020
            </p>
          </div>
          
          <nav style={{ display: 'flex', gap: 36 }}>
            {['商品菜單', '最新消息', '關於我們', '聯絡我們'].map(item => (
              <span key={item} style={{
                fontSize: 13,
                letterSpacing: 2,
                cursor: 'pointer',
                color: theme.textSecondary,
                transition: 'all 0.3s',
                fontFamily: "'Noto Sans TC', sans-serif",
                position: 'relative',
                padding: '4px 0',
              }} 
              onMouseEnter={e => {
                e.target.style.color = theme.gold;
              }}
              onMouseLeave={e => {
                e.target.style.color = theme.textSecondary;
              }}>
                {item}
              </span>
            ))}
          </nav>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: `1.5px solid ${theme.borderGold}`,
              backgroundColor: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              transition: 'all 0.3s ease',
              color: theme.gold,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = theme.gold;
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = theme.gold;
            }}
          >
            {darkMode ? '☀' : '☽'}
          </button>

          <button
            onClick={() => setShowCart(true)}
            style={{
              position: 'relative',
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: `1.5px solid ${theme.borderGold}`,
              backgroundColor: 'transparent',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
              transition: 'all 0.3s ease',
              color: theme.gold,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = theme.gold;
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = theme.gold;
            }}
          >
            🧺
            {totalItems > 0 && (
              <span style={{
                position: 'absolute',
                top: -4,
                right: -4,
                width: 20,
                height: 20,
                borderRadius: '50%',
                backgroundColor: theme.gold,
                color: '#fff',
                fontSize: 10,
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Noto Sans TC', sans-serif",
                boxShadow: '0 2px 8px rgba(201, 169, 98, 0.4)',
              }}>
                {totalItems}
              </span>
            )}
          </button>

          {isLoggedIn ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ 
                fontSize: 14, 
                color: theme.text,
                fontFamily: "'Noto Sans TC', sans-serif",
              }}>
                {currentUser}
              </span>
              <button
                onClick={handleLogout}
                style={{
                  padding: '12px 24px',
                  border: `1.5px solid ${theme.border}`,
                  backgroundColor: 'transparent',
                  color: theme.text,
                  fontSize: 12,
                  letterSpacing: 2,
                  cursor: 'pointer',
                  borderRadius: 4,
                  transition: 'all 0.3s ease',
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}
                onMouseEnter={e => {
                  e.target.style.borderColor = theme.gold;
                  e.target.style.color = theme.gold;
                }}
                onMouseLeave={e => {
                  e.target.style.borderColor = theme.border;
                  e.target.style.color = theme.text;
                }}
              >
                登出
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowLogin(true)}
              style={{
                padding: '12px 32px',
                border: 'none',
                background: `linear-gradient(135deg, ${theme.accentBg} 0%, ${darkMode ? '#3d352a' : '#4a3c2a'} 100%)`,
                color: theme.accentText,
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: 2,
                cursor: 'pointer',
                borderRadius: 4,
                transition: 'all 0.3s ease',
                fontFamily: "'Noto Sans TC', sans-serif",
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
              }}
            >
              登入
            </button>
          )}
        </div>
      </header>

      {/* 商品詳細頁面 */}
      {selectedProduct ? (
        <section style={{
          padding: '60px 48px 100px',
          maxWidth: 1200,
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}>
          {/* 返回按鈕 */}
          <button
            onClick={() => setSelectedProduct(null)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 24px',
              border: `1.5px solid ${theme.border}`,
              backgroundColor: 'transparent',
              color: theme.textSecondary,
              fontSize: 13,
              cursor: 'pointer',
              marginBottom: 48,
              fontFamily: "'Noto Sans TC', sans-serif",
              transition: 'all 0.3s',
              borderRadius: 4,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = theme.gold;
              e.currentTarget.style.color = theme.gold;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = theme.border;
              e.currentTarget.style.color = theme.textSecondary;
            }}
          >
            ← 返回商品列表
          </button>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'start',
          }}>
            {/* 左側圖片 - 修復切到問題 */}
            <div style={{
              position: 'relative',
              backgroundColor: theme.cream,
              border: `1px solid ${theme.border}`,
              borderRadius: 8,
              padding: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 450,
            }}>
              <CornerOrnament position="topLeft" />
              <CornerOrnament position="topRight" />
              <CornerOrnament position="bottomLeft" />
              <CornerOrnament position="bottomRight" />
              
              {selectedProduct.badge && (
                <div style={{
                  position: 'absolute',
                  top: 24,
                  left: 24,
                  padding: '8px 18px',
                  background: `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldDark} 100%)`,
                  color: '#fff',
                  fontSize: 11,
                  letterSpacing: 2,
                  fontFamily: "'Noto Sans TC', sans-serif",
                  borderRadius: 2,
                  boxShadow: '0 4px 12px rgba(201, 169, 98, 0.3)',
                }}>
                  {selectedProduct.badge}
                </div>
              )}
              <span style={{ fontSize: 140 }}>{selectedProduct.image}</span>
            </div>

            {/* 右側資訊 */}
            <div style={{ paddingTop: 20 }}>
              <span style={{
                display: 'inline-block',
                fontSize: 11,
                color: theme.gold,
                letterSpacing: 3,
                fontFamily: "'Noto Sans TC', sans-serif",
                padding: '6px 14px',
                border: `1px solid ${theme.gold}`,
                borderRadius: 2,
                marginBottom: 16,
              }}>
                {selectedProduct.category}
              </span>
              <h2 style={{
                fontSize: 36,
                fontWeight: 500,
                margin: '0 0 12px',
                letterSpacing: 4,
              }}>
                {selectedProduct.name}
              </h2>
              <p style={{
                fontSize: 15,
                color: theme.textSecondary,
                marginBottom: 28,
                fontFamily: "'Noto Sans TC', sans-serif",
                letterSpacing: 1,
              }}>
                {selectedProduct.description}
              </p>

              <div style={{
                fontSize: 36,
                fontWeight: 400,
                marginBottom: 36,
                display: 'flex',
                alignItems: 'baseline',
                gap: 8,
                color: theme.gold,
              }}>
                <span style={{ fontSize: 16, color: theme.textMuted }}>NT$</span>
                {selectedProduct.price}
              </div>

              <div style={{ marginBottom: 36 }}>
                <OrnamentDivider width={300} />
              </div>

              <div style={{
                padding: '24px 28px',
                backgroundColor: theme.bgTertiary,
                borderRadius: 8,
                border: `1px solid ${theme.border}`,
                marginBottom: 28,
              }}>
                <h4 style={{
                  fontSize: 13,
                  letterSpacing: 3,
                  marginBottom: 16,
                  color: theme.gold,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  ✦ 商品介紹
                </h4>
                <p style={{
                  fontSize: 15,
                  lineHeight: 2.2,
                  color: theme.text,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  {selectedProduct.fullDescription}
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
                marginBottom: 36,
              }}>
                <div style={{
                  padding: 20,
                  backgroundColor: theme.bgTertiary,
                  border: `1px solid ${theme.border}`,
                  borderRadius: 6,
                }}>
                  <p style={{
                    fontSize: 10,
                    color: theme.gold,
                    marginBottom: 10,
                    fontFamily: "'Noto Sans TC', sans-serif",
                    letterSpacing: 2,
                  }}>
                    成分
                  </p>
                  <p style={{
                    fontSize: 13,
                    lineHeight: 1.9,
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}>
                    {selectedProduct.ingredients}
                  </p>
                </div>
                <div style={{
                  padding: 20,
                  backgroundColor: theme.bgTertiary,
                  border: `1px solid ${theme.border}`,
                  borderRadius: 6,
                }}>
                  <p style={{
                    fontSize: 10,
                    color: theme.gold,
                    marginBottom: 10,
                    fontFamily: "'Noto Sans TC', sans-serif",
                    letterSpacing: 2,
                  }}>
                    保存方式
                  </p>
                  <p style={{
                    fontSize: 13,
                    lineHeight: 1.9,
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}>
                    {selectedProduct.storage}
                  </p>
                </div>
              </div>

              <div style={{
                padding: '16px 20px',
                backgroundColor: theme.bgTertiary,
                border: `1px solid ${theme.border}`,
                borderRadius: 6,
                marginBottom: 36,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}>
                <span style={{
                  fontSize: 10,
                  color: theme.gold,
                  fontFamily: "'Noto Sans TC', sans-serif",
                  letterSpacing: 2,
                }}>
                  熱量
                </span>
                <span style={{
                  fontSize: 14,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  {selectedProduct.calories}
                </span>
              </div>

              {/* 購買按鈕 */}
              {isLoggedIn ? (
                <button
                  onClick={() => addToCart(selectedProduct)}
                  style={{
                    width: '100%',
                    padding: '20px 32px',
                    border: 'none',
                    background: `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldDark} 100%)`,
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: 4,
                    cursor: 'pointer',
                    fontFamily: "'Noto Sans TC', sans-serif",
                    transition: 'all 0.3s',
                    borderRadius: 6,
                    boxShadow: '0 6px 24px rgba(201, 169, 98, 0.3)',
                  }}
                  onMouseEnter={e => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 32px rgba(201, 169, 98, 0.4)';
                  }}
                  onMouseLeave={e => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 6px 24px rgba(201, 169, 98, 0.3)';
                  }}
                >
                  加入購物袋
                </button>
              ) : (
                <div>
                  <button
                    onClick={() => setShowLogin(true)}
                    style={{
                      width: '100%',
                      padding: '20px 32px',
                      border: `2px solid ${theme.border}`,
                      backgroundColor: theme.bgTertiary,
                      color: theme.textSecondary,
                      fontSize: 14,
                      fontWeight: 500,
                      letterSpacing: 3,
                      cursor: 'pointer',
                      fontFamily: "'Noto Sans TC', sans-serif",
                      borderRadius: 6,
                      transition: 'all 0.3s',
                    }}
                    onMouseEnter={e => {
                      e.target.style.borderColor = theme.gold;
                      e.target.style.color = theme.gold;
                    }}
                    onMouseLeave={e => {
                      e.target.style.borderColor = theme.border;
                      e.target.style.color = theme.textSecondary;
                    }}
                  >
                    請先登入以訂購商品
                  </button>
                  <p style={{
                    fontSize: 13,
                    color: theme.textMuted,
                    textAlign: 'center',
                    marginTop: 16,
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}>
                    還沒有帳號？
                    <span 
                      style={{ color: theme.gold, cursor: 'pointer', marginLeft: 8 }} 
                      onClick={() => setShowRegister(true)}
                    >
                      立即註冊
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Hero 區塊 */}
          <section style={{
            padding: '100px 48px 80px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}>
            {/* 裝飾框 */}
            <div style={{
              position: 'relative',
              display: 'inline-block',
              padding: '60px 100px',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                border: `1px solid ${theme.borderGold}`,
                opacity: 0.3,
                borderRadius: 8,
              }} />
              <CornerOrnament position="topLeft" />
              <CornerOrnament position="topRight" />
              <CornerOrnament position="bottomLeft" />
              <CornerOrnament position="bottomRight" />

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 20,
                marginBottom: 28,
              }}>
                <div style={{ width: 60, height: 1, background: `linear-gradient(90deg, transparent, ${theme.gold})` }} />
                <span style={{ color: theme.gold, fontSize: 24 }}>✦</span>
                <div style={{ width: 60, height: 1, background: `linear-gradient(90deg, ${theme.gold}, transparent)` }} />
              </div>

              <p style={{
                fontSize: 12,
                letterSpacing: 8,
                color: theme.textSecondary,
                marginBottom: 20,
                fontFamily: "'Noto Sans TC', sans-serif",
              }}>
                用心烘焙・傳遞溫暖
              </p>
              
              <h2 style={{
                fontSize: 'clamp(32px, 6vw, 58px)',
                fontWeight: 400,
                letterSpacing: 8,
                margin: 0,
                lineHeight: 1.3,
              }}>
                烘焙的藝術
              </h2>
              <h2 style={{
                fontSize: 'clamp(32px, 6vw, 58px)',
                fontWeight: 600,
                letterSpacing: 10,
                margin: '8px 0 0 0',
                lineHeight: 1.3,
                background: `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldLight} 50%, ${theme.gold} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                麥香的溫度
              </h2>
              
              <p style={{
                fontSize: 15,
                color: theme.textSecondary,
                marginTop: 32,
                fontWeight: 300,
                maxWidth: 380,
                marginLeft: 'auto',
                marginRight: 'auto',
                lineHeight: 2.4,
                fontFamily: "'Noto Sans TC', sans-serif",
              }}>
                承襲法式傳統工藝<br />
                每一份麵包都是溫暖的故事
              </p>
            </div>

            {/* 特色圖示 */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 40,
              marginTop: 60,
              flexWrap: 'wrap',
            }}>
              {[
                { icon: '🌾', title: '有機麵粉', subtitle: '石磨研磨' },
                { icon: '🧈', title: '法國奶油', subtitle: '原產地認證' },
                { icon: '⏰', title: '長時發酵', subtitle: '48小時熟成' },
              ].map((item, i) => (
                <div key={i} style={{
                  textAlign: 'center',
                  padding: '32px 40px',
                  border: `1px solid ${theme.border}`,
                  backgroundColor: theme.bgSecondary,
                  minWidth: 160,
                  borderRadius: 8,
                  transition: 'all 0.4s ease',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = theme.gold;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = `0 12px 32px ${darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(201, 169, 98, 0.15)'}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = theme.border;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <span style={{ fontSize: 40, display: 'block', marginBottom: 16 }}>{item.icon}</span>
                  <p style={{
                    fontSize: 15,
                    letterSpacing: 2,
                    margin: '0 0 6px 0',
                    fontWeight: 500,
                  }}>
                    {item.title}
                  </p>
                  <p style={{
                    fontSize: 12,
                    color: theme.textMuted,
                    margin: 0,
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}>
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 最新消息區塊 */}
          <section style={{
            padding: '80px 48px',
            backgroundColor: theme.cream,
            borderTop: `1px solid ${theme.border}`,
            borderBottom: `1px solid ${theme.border}`,
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{
              maxWidth: 1000,
              margin: '0 auto',
            }}>
              <div style={{ textAlign: 'center', marginBottom: 48 }}>
                <span style={{ color: theme.gold, fontSize: 20 }}>✦</span>
                <h3 style={{
                  fontSize: 28,
                  fontWeight: 500,
                  margin: '20px 0 12px',
                  letterSpacing: 4,
                }}>
                  最新消息
                </h3>
                <p style={{
                  fontSize: 13,
                  color: theme.textSecondary,
                  fontFamily: "'Noto Sans TC', sans-serif",
                  letterSpacing: 2,
                }}>
                  掌握麥香小屋的最新動態
                </p>
                <div style={{ marginTop: 24 }}>
                  <OrnamentDivider width={160} />
                </div>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}>
                {newsItems.map((news, idx) => (
                  <div
                    key={news.id}
                    style={{
                      display: 'flex',
                      gap: 28,
                      padding: '28px 32px',
                      backgroundColor: theme.bgSecondary,
                      border: `1px solid ${theme.border}`,
                      cursor: 'pointer',
                      transition: 'all 0.4s ease',
                      borderRadius: 8,
                      animation: `fadeInUp 0.5s ease ${idx * 0.1}s both`,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = theme.gold;
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.boxShadow = `0 8px 24px ${darkMode ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.06)'}`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = theme.border;
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      minWidth: 100,
                      textAlign: 'center',
                      borderRight: `1px solid ${theme.border}`,
                      paddingRight: 24,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}>
                      <p style={{
                        fontSize: 12,
                        color: theme.textSecondary,
                        margin: '0 0 10px 0',
                        fontFamily: "'Noto Sans TC', sans-serif",
                      }}>
                        {news.date}
                      </p>
                      <span style={{
                        display: 'inline-block',
                        padding: '5px 12px',
                        background: news.tag === '優惠' 
                          ? `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldDark} 100%)`
                          : news.tag === '新品' 
                            ? 'linear-gradient(135deg, #6b8f6b 0%, #4a6b4a 100%)'
                            : `linear-gradient(135deg, ${theme.textMuted} 0%, ${theme.textSecondary} 100%)`,
                        color: '#fff',
                        fontSize: 10,
                        fontFamily: "'Noto Sans TC', sans-serif",
                        borderRadius: 2,
                        letterSpacing: 1,
                      }}>
                        {news.tag}
                      </span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontSize: 17,
                        fontWeight: 500,
                        margin: '0 0 10px 0',
                        letterSpacing: 1,
                      }}>
                        {news.title}
                      </h4>
                      <p style={{
                        fontSize: 14,
                        color: theme.textSecondary,
                        margin: 0,
                        lineHeight: 1.9,
                        fontFamily: "'Noto Sans TC', sans-serif",
                      }}>
                        {news.content}
                      </p>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: theme.gold,
                      fontSize: 18,
                    }}>
                      →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 分類選擇 */}
          <section style={{
            padding: '60px 48px 40px',
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <span style={{ color: theme.gold, fontSize: 20 }}>✦</span>
              <h3 style={{
                fontSize: 28,
                fontWeight: 500,
                margin: '20px 0 12px',
                letterSpacing: 4,
              }}>
                精選商品
              </h3>
              <p style={{
                fontSize: 13,
                color: theme.textSecondary,
                fontFamily: "'Noto Sans TC', sans-serif",
                letterSpacing: 2,
              }}>
                點擊商品查看詳細資訊
              </p>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 0,
              border: `1px solid ${theme.border}`,
              maxWidth: 520,
              margin: '0 auto',
              borderRadius: 8,
              overflow: 'hidden',
              backgroundColor: theme.bgSecondary,
            }}>
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    flex: 1,
                    padding: '16px 24px',
                    border: 'none',
                    borderRight: idx < categories.length - 1 ? `1px solid ${theme.border}` : 'none',
                    backgroundColor: selectedCategory === cat ? theme.gold : 'transparent',
                    color: selectedCategory === cat ? '#fff' : theme.textSecondary,
                    fontSize: 13,
                    letterSpacing: 3,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}
                  onMouseEnter={e => {
                    if (selectedCategory !== cat) {
                      e.target.style.backgroundColor = theme.bgTertiary;
                      e.target.style.color = theme.gold;
                    }
                  }}
                  onMouseLeave={e => {
                    if (selectedCategory !== cat) {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = theme.textSecondary;
                    }
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* 商品展示 */}
          <section style={{
            padding: '20px 48px 100px',
            maxWidth: 1400,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: 32,
            }}>
              <span style={{
                fontSize: 12,
                color: theme.textMuted,
                fontFamily: "'Noto Sans TC', sans-serif",
                letterSpacing: 1,
              }}>
                共 {filteredProducts.length} 項商品
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 28,
            }}>
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  style={{
                    backgroundColor: theme.bgCard,
                    border: `1px solid ${theme.border}`,
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    animation: `fadeInUp 0.6s ease ${index * 0.08}s both`,
                    position: 'relative',
                    borderRadius: 10,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = darkMode 
                      ? '0 24px 48px rgba(0,0,0,0.4)' 
                      : '0 24px 48px rgba(201, 169, 98, 0.12)';
                    e.currentTarget.style.borderColor = theme.gold;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = theme.border;
                  }}
                >
                  <div style={{
                    height: 220,
                    backgroundColor: theme.cream,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 72,
                    position: 'relative',
                    borderBottom: `1px solid ${theme.border}`,
                  }}>
                    <span style={{ 
                      transition: 'transform 0.4s ease',
                    }}>{product.image}</span>
                    
                    {product.badge && (
                      <div style={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        padding: '6px 14px',
                        background: `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldDark} 100%)`,
                        color: '#fff',
                        fontSize: 10,
                        letterSpacing: 1,
                        fontWeight: 500,
                        fontFamily: "'Noto Sans TC', sans-serif",
                        borderRadius: 2,
                        boxShadow: '0 4px 12px rgba(201, 169, 98, 0.3)',
                      }}>
                        {product.badge}
                      </div>
                    )}

                    {/* 查看詳情提示 */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '12px',
                      background: `linear-gradient(transparent, ${darkMode ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.4)'})`,
                      textAlign: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                    className="hover-hint"
                    >
                      <span style={{
                        fontSize: 11,
                        color: '#fff',
                        fontFamily: "'Noto Sans TC', sans-serif",
                        letterSpacing: 2,
                      }}>
                        點擊查看詳情 →
                      </span>
                    </div>
                  </div>
                  
                  <div style={{ padding: 28 }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 12,
                    }}>
                      <h4 style={{
                        fontSize: 19,
                        fontWeight: 500,
                        margin: 0,
                        letterSpacing: 2,
                      }}>
                        {product.name}
                      </h4>
                      <span style={{
                        fontSize: 10,
                        color: theme.gold,
                        padding: '4px 10px',
                        border: `1px solid ${theme.borderGold}`,
                        fontFamily: "'Noto Sans TC', sans-serif",
                        borderRadius: 2,
                        letterSpacing: 1,
                      }}>
                        {product.category}
                      </span>
                    </div>
                    
                    <p style={{
                      fontSize: 13,
                      color: theme.textSecondary,
                      margin: '0 0 20px 0',
                      fontFamily: "'Noto Sans TC', sans-serif",
                      letterSpacing: 1,
                    }}>
                      {product.description}
                    </p>
                    
                    <div style={{
                      height: 1,
                      background: `linear-gradient(90deg, ${theme.border}, transparent)`,
                      marginBottom: 20,
                    }} />
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      <div>
                        <span style={{
                          fontSize: 11,
                          color: theme.textMuted,
                          fontFamily: "'Noto Sans TC', sans-serif",
                        }}>
                          NT$
                        </span>
                        <span style={{
                          fontSize: 26,
                          fontWeight: 400,
                          marginLeft: 4,
                          color: theme.gold,
                        }}>
                          {product.price}
                        </span>
                      </div>
                      <span style={{
                        fontSize: 12,
                        color: theme.gold,
                        fontFamily: "'Noto Sans TC', sans-serif",
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                      }}>
                        查看詳情 <span style={{ fontSize: 16 }}>→</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 關於我們區塊 */}
          <section style={{
            padding: '100px 48px',
            position: 'relative',
            zIndex: 1,
            backgroundColor: theme.cream,
            borderTop: `1px solid ${theme.border}`,
          }}>
            <div style={{
              maxWidth: 900,
              margin: '0 auto',
              textAlign: 'center',
              position: 'relative',
            }}>
              <span style={{ color: theme.gold, fontSize: 24 }}>✦</span>
              <h3 style={{
                fontSize: 30,
                fontWeight: 500,
                margin: '24px 0 20px',
                letterSpacing: 6,
              }}>
                關於麥香小屋
              </h3>
              <div style={{ marginBottom: 40 }}>
                <OrnamentDivider width={200} />
              </div>
              
              <p style={{
                fontSize: 16,
                color: theme.textSecondary,
                lineHeight: 2.6,
                fontFamily: "'Noto Sans TC', sans-serif",
                marginBottom: 56,
                maxWidth: 650,
                margin: '0 auto 56px',
              }}>
                麥香小屋創立於 2020 年，由一群熱愛烘焙的職人共同創立。<br />
                我們堅持使用最優質的原料，遵循傳統法式工法，<br />
                每日清晨五點開始工作，只為了將最新鮮的美味送到您的手中。<br /><br />
                <span style={{ color: theme.gold, fontStyle: 'italic' }}>
                  「用心烘焙，傳遞溫暖」
                </span>
                是我們不變的初衷。
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 48,
                flexWrap: 'wrap',
              }}>
                {[
                  { number: '5+', label: '年專業經驗' },
                  { number: '2萬+', label: '滿意顧客' },
                  { number: '50+', label: '每日品項' },
                  { number: '100%', label: '新鮮現做' },
                ].map((stat, i) => (
                  <div key={i} style={{
                    padding: '24px 32px',
                    border: `1px solid ${theme.border}`,
                    backgroundColor: theme.bgSecondary,
                    borderRadius: 8,
                    minWidth: 140,
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = theme.gold;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = theme.border;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    <p style={{
                      fontSize: 36,
                      fontWeight: 300,
                      margin: 0,
                      background: `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldLight} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      {stat.number}
                    </p>
                    <p style={{
                      fontSize: 12,
                      color: theme.textSecondary,
                      margin: '10px 0 0',
                      fontFamily: "'Noto Sans TC', sans-serif",
                      letterSpacing: 2,
                    }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* 登入彈窗 */}
      {showLogin && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 200,
          backdropFilter: 'blur(12px)',
          animation: 'fadeIn 0.3s ease',
        }} onClick={() => setShowLogin(false)}>
          <div style={{
            backgroundColor: theme.bgSecondary,
            padding: 56,
            width: '100%',
            maxWidth: 440,
            border: `1px solid ${theme.border}`,
            animation: 'scaleIn 0.3s ease',
            maxHeight: '90vh',
            overflowY: 'auto',
            borderRadius: 12,
            position: 'relative',
          }} onClick={e => e.stopPropagation()}>
            <CornerOrnament position="topLeft" />
            <CornerOrnament position="topRight" />
            
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <span style={{ color: theme.gold, fontSize: 28 }}>✦</span>
              <h3 style={{
                fontSize: 28,
                fontWeight: 500,
                marginTop: 20,
                marginBottom: 10,
                letterSpacing: 4,
              }}>
                歡迎回來
              </h3>
              <p style={{
                color: theme.textSecondary,
                fontSize: 14,
                fontFamily: "'Noto Sans TC', sans-serif",
              }}>
                登入以繼續購物
              </p>
            </div>
            
            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: 24 }}>
                <label style={{
                  display: 'block',
                  fontSize: 11,
                  color: theme.textSecondary,
                  marginBottom: 10,
                  letterSpacing: 2,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  電子郵件
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={loginForm.email}
                  onChange={e => setLoginForm({...loginForm, email: e.target.value})}
                  style={{
                    width: '100%',
                    padding: 16,
                    border: `1.5px solid ${theme.border}`,
                    borderRadius: 6,
                    backgroundColor: 'transparent',
                    color: theme.text,
                    fontSize: 15,
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: "'Noto Sans TC', sans-serif",
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={e => e.target.style.borderColor = theme.gold}
                  onBlur={e => e.target.style.borderColor = theme.border}
                />
              </div>
              
              <div style={{ marginBottom: 32 }}>
                <label style={{
                  display: 'block',
                  fontSize: 11,
                  color: theme.textSecondary,
                  marginBottom: 10,
                  letterSpacing: 2,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  密碼
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={loginForm.password}
                  onChange={e => setLoginForm({...loginForm, password: e.target.value})}
                  style={{
                    width: '100%',
                    padding: 16,
                    border: `1.5px solid ${theme.border}`,
                    borderRadius: 6,
                    backgroundColor: 'transparent',
                    color: theme.text,
                    fontSize: 15,
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: "'Noto Sans TC', sans-serif",
                    transition: 'border-color 0.3s',
                  }}
                  onFocus={e => e.target.style.borderColor = theme.gold}
                  onBlur={e => e.target.style.borderColor = theme.border}
                />
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 28,
              }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 13,
                  color: theme.textSecondary,
                  cursor: 'pointer',
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  <input type="checkbox" style={{ accentColor: theme.gold }} />
                  記住我
                </label>
                <span style={{
                  fontSize: 13,
                  color: theme.gold,
                  cursor: 'pointer',
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  忘記密碼？
                </span>
              </div>
              
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: 18,
                  border: 'none',
                  borderRadius: 6,
                  background: `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldDark} 100%)`,
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                  marginBottom: 28,
                  fontFamily: "'Noto Sans TC', sans-serif",
                  letterSpacing: 3,
                  boxShadow: '0 6px 20px rgba(201, 169, 98, 0.3)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 28px rgba(201, 169, 98, 0.4)';
                }}
                onMouseLeave={e => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 6px 20px rgba(201, 169, 98, 0.3)';
                }}
              >
                登入
              </button>
            </form>
            
            <p style={{
              textAlign: 'center',
              color: theme.textSecondary,
              fontSize: 14,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              還沒有帳號？{' '}
              <span
                style={{ color: theme.gold, cursor: 'pointer', fontWeight: 500 }}
                onClick={() => { setShowLogin(false); setShowRegister(true); }}
              >
                立即註冊
              </span>
            </p>
          </div>
        </div>
      )}

      {/* 註冊彈窗 */}
      {showRegister && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 200,
          backdropFilter: 'blur(12px)',
          animation: 'fadeIn 0.3s ease',
          padding: 20,
        }} onClick={() => setShowRegister(false)}>
          <div style={{
            backgroundColor: theme.bgSecondary,
            padding: '48px 56px',
            width: '100%',
            maxWidth: 500,
            border: `1px solid ${theme.border}`,
            animation: 'scaleIn 0.3s ease',
            maxHeight: '90vh',
            overflowY: 'auto',
            borderRadius: 12,
            position: 'relative',
          }} onClick={e => e.stopPropagation()}>
            <CornerOrnament position="topLeft" />
            <CornerOrnament position="topRight" />
            
            <div style={{ textAlign: 'center', marginBottom: 36 }}>
              <span style={{ color: theme.gold, fontSize: 28 }}>✦</span>
              <h3 style={{
                fontSize: 28,
                fontWeight: 500,
                marginTop: 20,
                marginBottom: 10,
                letterSpacing: 4,
              }}>
                加入麥香小屋
              </h3>
              <p style={{
                color: theme.textSecondary,
                fontSize: 14,
                fontFamily: "'Noto Sans TC', sans-serif",
              }}>
                填寫以下資料，享受專屬會員優惠
              </p>
            </div>
            
            <form onSubmit={handleRegister}>
              {/* 基本資料 */}
              <div style={{
                borderBottom: `1px solid ${theme.border}`,
                paddingBottom: 28,
                marginBottom: 28,
              }}>
                <p style={{
                  fontSize: 11,
                  letterSpacing: 3,
                  color: theme.gold,
                  marginBottom: 20,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  ✦ 基本資料
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 11,
                      color: theme.textSecondary,
                      marginBottom: 8,
                      fontFamily: "'Noto Sans TC', sans-serif",
                      letterSpacing: 1,
                    }}>
                      姓氏 *
                    </label>
                    <input
                      type="text"
                      placeholder="王"
                      value={registerForm.lastName}
                      onChange={e => setRegisterForm({...registerForm, lastName: e.target.value})}
                      style={{
                        width: '100%',
                        padding: 14,
                        border: `1.5px solid ${formErrors.lastName ? theme.gold : theme.border}`,
                        borderRadius: 6,
                        backgroundColor: 'transparent',
                        color: theme.text,
                        fontSize: 14,
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: "'Noto Sans TC', sans-serif",
                      }}
                    />
                    {formErrors.lastName && <span style={{ fontSize: 10, color: theme.gold }}>{formErrors.lastName}</span>}
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 11,
                      color: theme.textSecondary,
                      marginBottom: 8,
                      fontFamily: "'Noto Sans TC', sans-serif",
                      letterSpacing: 1,
                    }}>
                      名字 *
                    </label>
                    <input
                      type="text"
                      placeholder="小明"
                      value={registerForm.firstName}
                      onChange={e => setRegisterForm({...registerForm, firstName: e.target.value})}
                      style={{
                        width: '100%',
                        padding: 14,
                        border: `1.5px solid ${formErrors.firstName ? theme.gold : theme.border}`,
                        borderRadius: 6,
                        backgroundColor: 'transparent',
                        color: theme.text,
                        fontSize: 14,
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: "'Noto Sans TC', sans-serif",
                      }}
                    />
                    {formErrors.firstName && <span style={{ fontSize: 10, color: theme.gold }}>{formErrors.firstName}</span>}
                  </div>
                </div>
                
                <div style={{ marginBottom: 16 }}>
                  <label style={{
                    display: 'block',
                    fontSize: 11,
                    color: theme.textSecondary,
                    marginBottom: 8,
                    fontFamily: "'Noto Sans TC', sans-serif",
                    letterSpacing: 1,
                  }}>
                    電子郵件 *
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={registerForm.email}
                    onChange={e => setRegisterForm({...registerForm, email: e.target.value})}
                    style={{
                      width: '100%',
                      padding: 14,
                      border: `1.5px solid ${formErrors.email ? theme.gold : theme.border}`,
                      borderRadius: 6,
                      backgroundColor: 'transparent',
                      color: theme.text,
                      fontSize: 14,
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: "'Noto Sans TC', sans-serif",
                    }}
                  />
                  {formErrors.email && <span style={{ fontSize: 10, color: theme.gold }}>{formErrors.email}</span>}
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 11,
                      color: theme.textSecondary,
                      marginBottom: 8,
                      fontFamily: "'Noto Sans TC', sans-serif",
                      letterSpacing: 1,
                    }}>
                      手機號碼 *
                    </label>
                    <input
                      type="tel"
                      placeholder="0912345678"
                      value={registerForm.phone}
                      onChange={e => setRegisterForm({...registerForm, phone: e.target.value})}
                      style={{
                        width: '100%',
                        padding: 14,
                        border: `1.5px solid ${formErrors.phone ? theme.gold : theme.border}`,
                        borderRadius: 6,
                        backgroundColor: 'transparent',
                        color: theme.text,
                        fontSize: 14,
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: "'Noto Sans TC', sans-serif",
                      }}
                    />
                    {formErrors.phone && <span style={{ fontSize: 10, color: theme.gold }}>{formErrors.phone}</span>}
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 11,
                      color: theme.textSecondary,
                      marginBottom: 8,
                      fontFamily: "'Noto Sans TC', sans-serif",
                      letterSpacing: 1,
                    }}>
                      生日 *（生日禮遇）
                    </label>
                    <input
                      type="date"
                      value={registerForm.birthDate}
                      onChange={e => setRegisterForm({...registerForm, birthDate: e.target.value})}
                      style={{
                        width: '100%',
                        padding: 14,
                        border: `1.5px solid ${formErrors.birthDate ? theme.gold : theme.border}`,
                        borderRadius: 6,
                        backgroundColor: 'transparent',
                        color: theme.text,
                        fontSize: 14,
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: "'Noto Sans TC', sans-serif",
                      }}
                    />
                    {formErrors.birthDate && <span style={{ fontSize: 10, color: theme.gold }}>{formErrors.birthDate}</span>}
                  </div>
                </div>
              </div>
              
              {/* 密碼設定 */}
              <div style={{
                borderBottom: `1px solid ${theme.border}`,
                paddingBottom: 28,
                marginBottom: 28,
              }}>
                <p style={{
                  fontSize: 11,
                  letterSpacing: 3,
                  color: theme.gold,
                  marginBottom: 20,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  ✦ 密碼設定
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 11,
                      color: theme.textSecondary,
                      marginBottom: 8,
                      fontFamily: "'Noto Sans TC', sans-serif",
                      letterSpacing: 1,
                    }}>
                      密碼 *（至少8字元）
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={registerForm.password}
                      onChange={e => setRegisterForm({...registerForm, password: e.target.value})}
                      style={{
                        width: '100%',
                        padding: 14,
                        border: `1.5px solid ${formErrors.password ? theme.gold : theme.border}`,
                        borderRadius: 6,
                        backgroundColor: 'transparent',
                        color: theme.text,
                        fontSize: 14,
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: "'Noto Sans TC', sans-serif",
                      }}
                    />
                    {formErrors.password && <span style={{ fontSize: 10, color: theme.gold }}>{formErrors.password}</span>}
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 11,
                      color: theme.textSecondary,
                      marginBottom: 8,
                      fontFamily: "'Noto Sans TC', sans-serif",
                      letterSpacing: 1,
                    }}>
                      確認密碼 *
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={registerForm.confirmPassword}
                      onChange={e => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                      style={{
                        width: '100%',
                        padding: 14,
                        border: `1.5px solid ${formErrors.confirmPassword ? theme.gold : theme.border}`,
                        borderRadius: 6,
                        backgroundColor: 'transparent',
                        color: theme.text,
                        fontSize: 14,
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: "'Noto Sans TC', sans-serif",
                      }}
                    />
                    {formErrors.confirmPassword && <span style={{ fontSize: 10, color: theme.gold }}>{formErrors.confirmPassword}</span>}
                  </div>
                </div>
              </div>
              
              {/* 同意條款 */}
              <div style={{ marginBottom: 28 }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  fontSize: 13,
                  color: theme.textSecondary,
                  cursor: 'pointer',
                  fontFamily: "'Noto Sans TC', sans-serif",
                  marginBottom: 12,
                }}>
                  <input
                    type="checkbox"
                    checked={registerForm.newsletter}
                    onChange={e => setRegisterForm({...registerForm, newsletter: e.target.checked})}
                    style={{ accentColor: theme.gold, marginTop: 2 }}
                  />
                  <span>訂閱電子報，獲得最新優惠與新品資訊</span>
                </label>
                <label style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  fontSize: 13,
                  color: formErrors.agreeTerms ? theme.gold : theme.textSecondary,
                  cursor: 'pointer',
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  <input
                    type="checkbox"
                    checked={registerForm.agreeTerms}
                    onChange={e => setRegisterForm({...registerForm, agreeTerms: e.target.checked})}
                    style={{ accentColor: theme.gold, marginTop: 2 }}
                  />
                  <span>
                    我已閱讀並同意 <span style={{ color: theme.gold }}>服務條款</span> 與 <span style={{ color: theme.gold }}>隱私權政策</span> *
                  </span>
                </label>
              </div>
              
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: 18,
                  border: 'none',
                  borderRadius: 6,
                  background: `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldDark} 100%)`,
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                  marginBottom: 28,
                  fontFamily: "'Noto Sans TC', sans-serif",
                  letterSpacing: 3,
                  boxShadow: '0 6px 20px rgba(201, 169, 98, 0.3)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 28px rgba(201, 169, 98, 0.4)';
                }}
                onMouseLeave={e => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 6px 20px rgba(201, 169, 98, 0.3)';
                }}
              >
                建立帳號
              </button>
            </form>
            
            <p style={{
              textAlign: 'center',
              color: theme.textSecondary,
              fontSize: 14,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              已有帳號？{' '}
              <span
                style={{ color: theme.gold, cursor: 'pointer', fontWeight: 500 }}
                onClick={() => { setShowRegister(false); setShowLogin(true); }}
              >
                立即登入
              </span>
            </p>
          </div>
        </div>
      )}

      {/* 購物車側欄 */}
      {showCart && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 200,
          animation: 'fadeIn 0.3s ease',
        }} onClick={() => setShowCart(false)}>
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '100%',
            maxWidth: 480,
            backgroundColor: theme.bgSecondary,
            borderLeft: `1px solid ${theme.border}`,
            display: 'flex',
            flexDirection: 'column',
            animation: 'slideInRight 0.3s ease',
          }} onClick={e => e.stopPropagation()}>
            <div style={{
              padding: '32px 36px',
              borderBottom: `1px solid ${theme.border}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <h3 style={{
                  fontSize: 24,
                  fontWeight: 500,
                  margin: 0,
                  letterSpacing: 2,
                }}>
                  購物袋
                </h3>
                <p style={{
                  fontSize: 12,
                  color: theme.textSecondary,
                  margin: '6px 0 0',
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  共 {totalItems} 件商品
                </p>
              </div>
              <button
                onClick={() => setShowCart(false)}
                style={{
                  width: 44,
                  height: 44,
                  border: `1px solid ${theme.border}`,
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  fontSize: 18,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.text,
                  borderRadius: 6,
                  transition: 'all 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = theme.gold;
                  e.currentTarget.style.color = theme.gold;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = theme.border;
                  e.currentTarget.style.color = theme.text;
                }}
              >
                ✕
              </button>
            </div>

            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '28px 36px',
            }}>
              {cart.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  paddingTop: 80,
                  color: theme.textSecondary,
                }}>
                  <p style={{ fontSize: 64, marginBottom: 24 }}>🧺</p>
                  <p style={{ fontSize: 18, marginBottom: 10, letterSpacing: 2 }}>購物袋是空的</p>
                  <p style={{ fontSize: 14, fontFamily: "'Noto Sans TC', sans-serif" }}>
                    快來探索我們的美味吧
                  </p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} style={{
                    display: 'flex',
                    gap: 20,
                    paddingBottom: 24,
                    marginBottom: 24,
                    borderBottom: `1px solid ${theme.border}`,
                  }}>
                    <div style={{
                      width: 80,
                      height: 80,
                      backgroundColor: theme.cream,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 36,
                      flexShrink: 0,
                      border: `1px solid ${theme.border}`,
                      borderRadius: 8,
                    }}>
                      {item.image}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontSize: 16,
                        fontWeight: 500,
                        margin: '0 0 6px 0',
                        letterSpacing: 1,
                      }}>
                        {item.name}
                      </h4>
                      <p style={{
                        fontSize: 14,
                        color: theme.gold,
                        margin: '0 0 14px 0',
                        fontFamily: "'Noto Sans TC', sans-serif",
                      }}>
                        NT$ {item.price}
                      </p>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                      }}>
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          style={{
                            width: 32,
                            height: 32,
                            border: `1px solid ${theme.border}`,
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            color: theme.text,
                            fontSize: 14,
                            borderRadius: 4,
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.borderColor = theme.gold}
                          onMouseLeave={e => e.currentTarget.style.borderColor = theme.border}
                        >
                          −
                        </button>
                        <span style={{ 
                          fontSize: 14, 
                          minWidth: 28, 
                          textAlign: 'center',
                          fontFamily: "'Noto Sans TC', sans-serif",
                        }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          style={{
                            width: 32,
                            height: 32,
                            border: `1px solid ${theme.border}`,
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            color: theme.text,
                            fontSize: 14,
                            borderRadius: 4,
                            transition: 'all 0.2s',
                          }}
                          onMouseEnter={e => e.currentTarget.style.borderColor = theme.gold}
                          onMouseLeave={e => e.currentTarget.style.borderColor = theme.border}
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            marginLeft: 'auto',
                            border: 'none',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            color: theme.textMuted,
                            fontSize: 12,
                            fontFamily: "'Noto Sans TC', sans-serif",
                            transition: 'color 0.2s',
                          }}
                          onMouseEnter={e => e.target.style.color = theme.gold}
                          onMouseLeave={e => e.target.style.color = theme.textMuted}
                        >
                          移除
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div style={{
                padding: '28px 36px',
                borderTop: `1px solid ${theme.border}`,
                backgroundColor: theme.cream,
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 12,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  <span style={{ fontSize: 13, color: theme.textSecondary }}>小計</span>
                  <span style={{ fontSize: 15 }}>NT$ {totalPrice}</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 24,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  <span style={{ fontSize: 13, color: theme.textSecondary }}>運費</span>
                  <span style={{ fontSize: 15, color: theme.gold }}>
                    {totalPrice >= 500 ? '免運費' : 'NT$ 60'}
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 28,
                  paddingTop: 24,
                  borderTop: `1px solid ${theme.border}`,
                }}>
                  <span style={{ fontSize: 14, fontFamily: "'Noto Sans TC', sans-serif", letterSpacing: 2 }}>總計</span>
                  <span style={{ fontSize: 28, fontWeight: 400, color: theme.gold }}>
                    NT$ {totalPrice + (totalPrice >= 500 ? 0 : 60)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={checkoutComplete}
                  style={{
                    width: '100%',
                    padding: 18,
                    border: 'none',
                    background: checkoutComplete 
                      ? theme.textMuted 
                      : `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldDark} 100%)`,
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: checkoutComplete ? 'default' : 'pointer',
                    letterSpacing: 3,
                    fontFamily: "'Noto Sans TC', sans-serif",
                    borderRadius: 6,
                    boxShadow: checkoutComplete ? 'none' : '0 6px 20px rgba(201, 169, 98, 0.3)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {checkoutComplete ? '處理中...' : '前往結帳'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 頁尾 */}
      <footer style={{
        padding: '80px 48px 40px',
        borderTop: `1px solid ${theme.border}`,
        backgroundColor: theme.bgSecondary,
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 48,
        }}>
          <div>
            <p style={{
              fontSize: 10,
              letterSpacing: 4,
              color: theme.gold,
              margin: '0 0 10px 0',
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              ─ 手工烘焙坊 ─
            </p>
            <h4 style={{
              fontSize: 24,
              fontWeight: 600,
              margin: '0 0 20px 0',
              letterSpacing: 6,
            }}>
              麥香小屋
            </h4>
            <p style={{
              fontSize: 14,
              color: theme.textSecondary,
              lineHeight: 2.2,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              承襲法式傳統工藝<br />
              每日新鮮手工烘焙
            </p>
          </div>
          
          <div>
            <h5 style={{
              fontSize: 12,
              letterSpacing: 3,
              marginBottom: 24,
              color: theme.gold,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              商品分類
            </h5>
            {['麵包', '甜點', '蛋糕', '季節限定', '禮盒'].map(item => (
              <p key={item} style={{
                fontSize: 14,
                marginBottom: 14,
                cursor: 'pointer',
                color: theme.textSecondary,
                fontFamily: "'Noto Sans TC', sans-serif",
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = theme.gold}
              onMouseLeave={e => e.target.style.color = theme.textSecondary}>
                {item}
              </p>
            ))}
          </div>
          
          <div>
            <h5 style={{
              fontSize: 12,
              letterSpacing: 3,
              marginBottom: 24,
              color: theme.gold,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              關於我們
            </h5>
            {['品牌故事', '門市據點', '人才招募', '媒體報導', '聯絡我們'].map(item => (
              <p key={item} style={{
                fontSize: 14,
                marginBottom: 14,
                cursor: 'pointer',
                color: theme.textSecondary,
                fontFamily: "'Noto Sans TC', sans-serif",
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = theme.gold}
              onMouseLeave={e => e.target.style.color = theme.textSecondary}>
                {item}
              </p>
            ))}
          </div>
          
          <div>
            <h5 style={{
              fontSize: 12,
              letterSpacing: 3,
              marginBottom: 24,
              color: theme.gold,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              門市資訊
            </h5>
            <p style={{
              fontSize: 14,
              marginBottom: 14,
              color: theme.textSecondary,
              fontFamily: "'Noto Sans TC', sans-serif",
              lineHeight: 1.8,
            }}>
              📍 台北市大安區敦化南路一段88號
            </p>
            <p style={{
              fontSize: 14,
              marginBottom: 14,
              color: theme.textSecondary,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              📞 (02) 2771-8888
            </p>
            <p style={{
              fontSize: 14,
              marginBottom: 24,
              color: theme.textSecondary,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              ⏰ 每日 07:00 - 20:00
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              {['FB', 'IG', 'LINE'].map((icon, i) => (
                <span key={i} style={{
                  width: 44,
                  height: 44,
                  border: `1px solid ${theme.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: 12,
                  fontFamily: "'Noto Sans TC', sans-serif",
                  borderRadius: 6,
                  transition: 'all 0.3s',
                  color: theme.textSecondary,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = theme.gold;
                  e.currentTarget.style.color = theme.gold;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = theme.border;
                  e.currentTarget.style.color = theme.textSecondary;
                }}>
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div style={{
          maxWidth: 1200,
          margin: '60px auto 0',
          paddingTop: 32,
          borderTop: `1px solid ${theme.border}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <p style={{
            fontSize: 12,
            color: theme.textMuted,
            fontFamily: "'Noto Sans TC', sans-serif",
          }}>
            © 2025 麥香小屋 版權所有
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['隱私權政策', '服務條款', 'Cookie 設定'].map(item => (
              <span key={item} style={{
                fontSize: 12,
                color: theme.textMuted,
                cursor: 'pointer',
                fontFamily: "'Noto Sans TC', sans-serif",
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = theme.gold}
              onMouseLeave={e => e.target.style.color = theme.textMuted}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </footer>

      {/* CSS 動畫 */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;600&family=Noto+Serif+TC:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInOut {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -20px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        input::placeholder, select::placeholder {
          color: ${theme.textMuted};
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${theme.border};
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${theme.gold};
        }
        
        select option {
          background: ${theme.bgSecondary};
          color: ${theme.text};
        }
      `}</style>
    </div>
  );
}
