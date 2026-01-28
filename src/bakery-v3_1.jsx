'use client'

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
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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

  // 選擇商品時滾動到頂部
  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <svg width={width} height="20" viewBox="0 0 200 20" style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }}>
      <path d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10" fill="none" stroke={theme.gold} strokeWidth="1" opacity="0.5" />
      <circle cx="100" cy="10" r="3" fill={theme.gold} opacity="0.8" />
      <circle cx="70" cy="10" r="1.5" fill={theme.gold} opacity="0.5" />
      <circle cx="130" cy="10" r="1.5" fill={theme.gold} opacity="0.5" />
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
        width="40"
        height="40"
        viewBox="0 0 60 60"
        style={{
          position: 'absolute',
          ...positions[position],
          opacity: 0.3,
          transform: transforms[position],
          transformOrigin: 'center',
        }}
      >
        <path d="M0 0 L0 30 Q0 0 30 0" fill="none" stroke={theme.gold} strokeWidth="1.5" />
        <path d="M0 0 L0 20 Q0 0 20 0" fill="none" stroke={theme.gold} strokeWidth="1" />
        <circle cx="8" cy="8" r="2" fill={theme.gold} />
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
      overflowX: 'hidden',
      width: '100%',
    }}>
      {/* 裝飾背景 - 手機隱藏部分裝飾 */}
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
          padding: '14px 28px',
          borderRadius: 4,
          fontSize: 13,
          fontWeight: 500,
          zIndex: 1000,
          animation: 'slideDown 0.4s ease',
          letterSpacing: 1,
          fontFamily: "'Noto Sans TC', sans-serif",
          boxShadow: '0 8px 32px rgba(201, 169, 98, 0.3)',
          maxWidth: '90%',
          textAlign: 'center',
        }}>
          {notification}
        </div>
      )}

      {/* 固定頂部區域 */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
      }}>
        {/* 頂部公告輪播 */}
        <div style={{
          background: `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldDark} 100%)`,
          color: '#fff',
          padding: '10px 16px',
          textAlign: 'center',
          fontSize: 12,
          letterSpacing: 1,
          fontFamily: "'Noto Sans TC', sans-serif",
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
          }}>
            <span style={{ opacity: 0.8 }}>✦</span>
            <span>{announcements[currentAnnouncementIndex]}</span>
            <span style={{ opacity: 0.8 }}>✦</span>
          </div>
        </div>

        {/* 頂部導航 - 響應式 */}
        <header style={{
          backgroundColor: darkMode ? 'rgba(26,22,18,0.97)' : 'rgba(253,251,247,0.97)',
          borderBottom: `1px solid ${theme.border}`,
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backdropFilter: 'blur(20px)',
        }}>
          {/* Logo */}
          <div style={{ textAlign: 'center', cursor: 'pointer', flexShrink: 0 }} onClick={() => setSelectedProduct(null)}>
            <p style={{
              fontSize: 9,
              letterSpacing: 3,
              color: theme.gold,
              margin: '0 0 4px 0',
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              ─ 手工烘焙坊 ─
            </p>
            <h1 style={{
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 6,
              margin: 0,
              color: theme.text,
            }}>
              麥香小屋
            </h1>
            <p style={{
              fontSize: 8,
              letterSpacing: 2,
              margin: '4px 0 0 0',
              color: theme.textMuted,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              創立於 2020
            </p>
          </div>

          {/* 桌面版導航 */}
          <nav className="desktop-nav" style={{
            display: 'flex',
            gap: 28,
          }}>
            {['商品菜單', '最新消息', '關於我們', '聯絡我們'].map(item => (
              <span key={item} style={{
                fontSize: 13,
                letterSpacing: 1,
                cursor: 'pointer',
                color: theme.textSecondary,
                transition: 'all 0.3s',
                fontFamily: "'Noto Sans TC', sans-serif",
              }}
                onMouseEnter={e => e.target.style.color = theme.gold}
                onMouseLeave={e => e.target.style.color = theme.textSecondary}>
                {item}
              </span>
            ))}
          </nav>

          {/* 右側按鈕區 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: `1.5px solid ${theme.borderGold}`,
                backgroundColor: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                transition: 'all 0.3s ease',
                color: theme.gold,
                flexShrink: 0,
              }}
            >
              {darkMode ? '☀' : '☽'}
            </button>

            <button
              onClick={() => setShowCart(true)}
              style={{
                position: 'relative',
                width: 40,
                height: 40,
                borderRadius: '50%',
                border: `1.5px solid ${theme.borderGold}`,
                backgroundColor: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                transition: 'all 0.3s ease',
                color: theme.gold,
                flexShrink: 0,
              }}
            >
              🧺
              {totalItems > 0 && (
                <span style={{
                  position: 'absolute',
                  top: -4,
                  right: -4,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  backgroundColor: theme.gold,
                  color: '#fff',
                  fontSize: 10,
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  {totalItems}
                </span>
              )}
            </button>

            {isLoggedIn ? (
              <div className="desktop-user" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{
                  fontSize: 13,
                  color: theme.text,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  {currentUser}
                </span>
                <button
                  onClick={handleLogout}
                  style={{
                    padding: '10px 18px',
                    border: `1.5px solid ${theme.border}`,
                    backgroundColor: 'transparent',
                    color: theme.text,
                    fontSize: 11,
                    letterSpacing: 1,
                    cursor: 'pointer',
                    borderRadius: 4,
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}
                >
                  登出
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="login-btn"
                style={{
                  padding: '10px 20px',
                  border: 'none',
                  background: `linear-gradient(135deg, ${theme.accentBg} 0%, ${darkMode ? '#3d352a' : '#4a3c2a'} 100%)`,
                  color: theme.accentText,
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: 1,
                  cursor: 'pointer',
                  borderRadius: 4,
                  fontFamily: "'Noto Sans TC', sans-serif",
                  flexShrink: 0,
                }}
              >
                登入
              </button>
            )}

            {/* 手機版漢堡選單按鈕 */}
            <button
              className="mobile-menu-btn"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              style={{
                display: 'none',
                width: 40,
                height: 40,
                border: `1px solid ${theme.border}`,
                backgroundColor: 'transparent',
                cursor: 'pointer',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                borderRadius: 4,
              }}
            >
              <span style={{ width: 18, height: 2, backgroundColor: theme.text, transition: 'all 0.3s' }} />
              <span style={{ width: 18, height: 2, backgroundColor: theme.text, transition: 'all 0.3s' }} />
              <span style={{ width: 18, height: 2, backgroundColor: theme.text, transition: 'all 0.3s' }} />
            </button>
          </div>
        </header>
      </div>

      {/* 佔位空間，避免內容被固定導航遮住 */}
      <div style={{ height: 110 }} />

      {/* 手機版選單 */}
      {showMobileMenu && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: theme.bgSecondary,
          zIndex: 150,
          padding: 24,
          animation: 'fadeIn 0.3s ease',
        }}>
          <button
            onClick={() => setShowMobileMenu(false)}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              width: 40,
              height: 40,
              border: 'none',
              backgroundColor: 'transparent',
              fontSize: 24,
              color: theme.text,
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
          <nav style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            marginTop: 80,
            alignItems: 'center',
          }}>
            {['商品菜單', '最新消息', '關於我們', '聯絡我們'].map(item => (
              <span key={item} style={{
                fontSize: 18,
                letterSpacing: 3,
                cursor: 'pointer',
                color: theme.text,
                fontFamily: "'Noto Sans TC', sans-serif",
              }} onClick={() => setShowMobileMenu(false)}>
                {item}
              </span>
            ))}

            {/* 分隔線 */}
            <div style={{
              width: 60,
              height: 1,
              backgroundColor: theme.border,
              margin: '8px 0',
            }} />

            {/* 登入/登出選項 */}
            {isLoggedIn ? (
              <>
                <span style={{
                  fontSize: 14,
                  color: theme.gold,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  👋 {currentUser}
                </span>
                <span
                  style={{
                    fontSize: 18,
                    letterSpacing: 3,
                    cursor: 'pointer',
                    color: theme.text,
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}
                  onClick={() => {
                    handleLogout();
                    setShowMobileMenu(false);
                  }}
                >
                  登出
                </span>
              </>
            ) : (
              <>
                <span
                  style={{
                    fontSize: 18,
                    letterSpacing: 3,
                    cursor: 'pointer',
                    color: theme.gold,
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontWeight: 500,
                  }}
                  onClick={() => {
                    setShowLogin(true);
                    setShowMobileMenu(false);
                  }}
                >
                  登入
                </span>
                <span
                  style={{
                    fontSize: 16,
                    letterSpacing: 2,
                    cursor: 'pointer',
                    color: theme.textSecondary,
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}
                  onClick={() => {
                    setShowRegister(true);
                    setShowMobileMenu(false);
                  }}
                >
                  註冊新帳號
                </span>
              </>
            )}
          </nav>
        </div>
      )}

      {/* 商品詳細頁面 */}
      {selectedProduct ? (
        <section style={{
          padding: '40px 20px 80px',
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
              gap: 8,
              padding: '10px 18px',
              border: `1.5px solid ${theme.border}`,
              backgroundColor: 'transparent',
              color: theme.textSecondary,
              fontSize: 13,
              cursor: 'pointer',
              marginBottom: 32,
              fontFamily: "'Noto Sans TC', sans-serif",
              borderRadius: 4,
            }}
          >
            ← 返回商品列表
          </button>

          <div className="product-detail-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 40,
          }}>
            {/* 圖片 */}
            <div style={{
              position: 'relative',
              backgroundColor: theme.cream,
              border: `1px solid ${theme.border}`,
              borderRadius: 8,
              padding: 32,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 280,
            }}>
              <CornerOrnament position="topLeft" />
              <CornerOrnament position="topRight" />
              <CornerOrnament position="bottomLeft" />
              <CornerOrnament position="bottomRight" />

              {selectedProduct.badge && (
                <div style={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  padding: '6px 14px',
                  background: `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldDark} 100%)`,
                  color: '#fff',
                  fontSize: 10,
                  letterSpacing: 1,
                  fontFamily: "'Noto Sans TC', sans-serif",
                  borderRadius: 2,
                }}>
                  {selectedProduct.badge}
                </div>
              )}
              <span style={{ fontSize: 100 }}>{selectedProduct.image}</span>
            </div>

            {/* 資訊 */}
            <div>
              <span style={{
                display: 'inline-block',
                fontSize: 10,
                color: theme.gold,
                letterSpacing: 2,
                fontFamily: "'Noto Sans TC', sans-serif",
                padding: '5px 12px',
                border: `1px solid ${theme.gold}`,
                borderRadius: 2,
                marginBottom: 12,
              }}>
                {selectedProduct.category}
              </span>
              <h2 style={{
                fontSize: 28,
                fontWeight: 500,
                margin: '0 0 10px',
                letterSpacing: 3,
              }}>
                {selectedProduct.name}
              </h2>
              <p style={{
                fontSize: 14,
                color: theme.textSecondary,
                marginBottom: 20,
                fontFamily: "'Noto Sans TC', sans-serif",
              }}>
                {selectedProduct.description}
              </p>

              <div style={{
                fontSize: 32,
                fontWeight: 400,
                marginBottom: 28,
                color: theme.gold,
              }}>
                <span style={{ fontSize: 14, color: theme.textMuted }}>NT$</span>
                {selectedProduct.price}
              </div>

              <OrnamentDivider width={200} />

              <div style={{
                padding: '20px 24px',
                backgroundColor: theme.bgTertiary,
                borderRadius: 8,
                border: `1px solid ${theme.border}`,
                margin: '24px 0',
              }}>
                <h4 style={{
                  fontSize: 12,
                  letterSpacing: 2,
                  marginBottom: 14,
                  color: theme.gold,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  ✦ 商品介紹
                </h4>
                <p style={{
                  fontSize: 14,
                  lineHeight: 2,
                  color: theme.text,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  {selectedProduct.fullDescription}
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 12,
                marginBottom: 24,
              }}>
                <div style={{
                  padding: 16,
                  backgroundColor: theme.bgTertiary,
                  border: `1px solid ${theme.border}`,
                  borderRadius: 6,
                }}>
                  <p style={{
                    fontSize: 10,
                    color: theme.gold,
                    marginBottom: 8,
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}>
                    成分
                  </p>
                  <p style={{
                    fontSize: 12,
                    lineHeight: 1.8,
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}>
                    {selectedProduct.ingredients}
                  </p>
                </div>
                <div style={{
                  padding: 16,
                  backgroundColor: theme.bgTertiary,
                  border: `1px solid ${theme.border}`,
                  borderRadius: 6,
                }}>
                  <p style={{
                    fontSize: 10,
                    color: theme.gold,
                    marginBottom: 8,
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}>
                    保存方式
                  </p>
                  <p style={{
                    fontSize: 12,
                    lineHeight: 1.8,
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}>
                    {selectedProduct.storage}
                  </p>
                </div>
              </div>

              <div style={{
                padding: '12px 16px',
                backgroundColor: theme.bgTertiary,
                border: `1px solid ${theme.border}`,
                borderRadius: 6,
                marginBottom: 28,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}>
                <span style={{ fontSize: 10, color: theme.gold, fontFamily: "'Noto Sans TC', sans-serif" }}>熱量</span>
                <span style={{ fontSize: 13, fontFamily: "'Noto Sans TC', sans-serif" }}>{selectedProduct.calories}</span>
              </div>

              {/* 購買按鈕 */}
              {isLoggedIn ? (
                <button
                  onClick={() => addToCart(selectedProduct)}
                  style={{
                    width: '100%',
                    padding: '18px 24px',
                    border: 'none',
                    background: `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldDark} 100%)`,
                    color: '#fff',
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: 3,
                    cursor: 'pointer',
                    fontFamily: "'Noto Sans TC', sans-serif",
                    borderRadius: 6,
                    boxShadow: '0 6px 24px rgba(201, 169, 98, 0.3)',
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
                      padding: '18px 24px',
                      border: `2px solid ${theme.border}`,
                      backgroundColor: theme.bgTertiary,
                      color: theme.textSecondary,
                      fontSize: 14,
                      fontWeight: 500,
                      letterSpacing: 2,
                      cursor: 'pointer',
                      fontFamily: "'Noto Sans TC', sans-serif",
                      borderRadius: 6,
                    }}
                  >
                    請先登入以訂購商品
                  </button>
                  <p style={{
                    fontSize: 12,
                    color: theme.textMuted,
                    textAlign: 'center',
                    marginTop: 14,
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}>
                    還沒有帳號？
                    <span style={{ color: theme.gold, cursor: 'pointer', marginLeft: 6 }} onClick={() => setShowRegister(true)}>
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
            padding: '60px 20px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}>
            {/* 裝飾框 */}
            <div style={{
              position: 'relative',
              display: 'inline-block',
              padding: '40px 24px',
              maxWidth: '100%',
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
                gap: 12,
                marginBottom: 20,
              }}>
                <div style={{ width: 40, height: 1, background: `linear-gradient(90deg, transparent, ${theme.gold})` }} />
                <span style={{ color: theme.gold, fontSize: 20 }}>✦</span>
                <div style={{ width: 40, height: 1, background: `linear-gradient(90deg, ${theme.gold}, transparent)` }} />
              </div>

              <p style={{
                fontSize: 11,
                letterSpacing: 4,
                color: theme.textSecondary,
                marginBottom: 16,
                fontFamily: "'Noto Sans TC', sans-serif",
              }}>
                用心烘焙・傳遞溫暖
              </p>

              <h2 style={{
                fontSize: 'clamp(28px, 8vw, 52px)',
                fontWeight: 400,
                letterSpacing: 4,
                margin: 0,
                lineHeight: 1.3,
              }}>
                烘焙的藝術
              </h2>
              <h2 style={{
                fontSize: 'clamp(28px, 8vw, 52px)',
                fontWeight: 600,
                letterSpacing: 5,
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
                fontSize: 14,
                color: theme.textSecondary,
                marginTop: 24,
                fontWeight: 300,
                lineHeight: 2.2,
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
              gap: 16,
              marginTop: 48,
              flexWrap: 'wrap',
              padding: '0 10px',
            }}>
              {[
                { icon: '🌾', title: '有機麵粉', subtitle: '石磨研磨' },
                { icon: '🧈', title: '法國奶油', subtitle: '原產地認證' },
                { icon: '⏰', title: '長時發酵', subtitle: '48小時熟成' },
              ].map((item, i) => (
                <div key={i} style={{
                  textAlign: 'center',
                  padding: '24px 20px',
                  border: `1px solid ${theme.border}`,
                  backgroundColor: theme.bgSecondary,
                  minWidth: 100,
                  flex: '1 1 100px',
                  maxWidth: 160,
                  borderRadius: 8,
                }}>
                  <span style={{ fontSize: 32, display: 'block', marginBottom: 12 }}>{item.icon}</span>
                  <p style={{
                    fontSize: 13,
                    letterSpacing: 1,
                    margin: '0 0 4px 0',
                    fontWeight: 500,
                  }}>
                    {item.title}
                  </p>
                  <p style={{
                    fontSize: 11,
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
            padding: '60px 20px',
            backgroundColor: theme.cream,
            borderTop: `1px solid ${theme.border}`,
            borderBottom: `1px solid ${theme.border}`,
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{ maxWidth: 1000, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <span style={{ color: theme.gold, fontSize: 18 }}>✦</span>
                <h3 style={{
                  fontSize: 24,
                  fontWeight: 500,
                  margin: '16px 0 10px',
                  letterSpacing: 3,
                }}>
                  最新消息
                </h3>
                <p style={{
                  fontSize: 12,
                  color: theme.textSecondary,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  掌握麥香小屋的最新動態
                </p>
                <div style={{ marginTop: 20 }}>
                  <OrnamentDivider width={120} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {newsItems.map((news, idx) => (
                  <div
                    key={news.id}
                    style={{
                      padding: '20px',
                      backgroundColor: theme.bgSecondary,
                      border: `1px solid ${theme.border}`,
                      cursor: 'pointer',
                      borderRadius: 8,
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 12,
                    }}>
                      <span style={{
                        padding: '4px 10px',
                        background: news.tag === '優惠'
                          ? `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldDark} 100%)`
                          : news.tag === '新品'
                            ? 'linear-gradient(135deg, #6b8f6b 0%, #4a6b4a 100%)'
                            : `linear-gradient(135deg, ${theme.textMuted} 0%, ${theme.textSecondary} 100%)`,
                        color: '#fff',
                        fontSize: 10,
                        fontFamily: "'Noto Sans TC', sans-serif",
                        borderRadius: 2,
                      }}>
                        {news.tag}
                      </span>
                      <span style={{
                        fontSize: 11,
                        color: theme.textSecondary,
                        fontFamily: "'Noto Sans TC', sans-serif",
                      }}>
                        {news.date}
                      </span>
                    </div>
                    <h4 style={{
                      fontSize: 15,
                      fontWeight: 500,
                      margin: '0 0 8px 0',
                    }}>
                      {news.title}
                    </h4>
                    <p style={{
                      fontSize: 13,
                      color: theme.textSecondary,
                      margin: 0,
                      lineHeight: 1.8,
                      fontFamily: "'Noto Sans TC', sans-serif",
                    }}>
                      {news.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 分類選擇 */}
          <section style={{
            padding: '50px 20px 30px',
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <span style={{ color: theme.gold, fontSize: 18 }}>✦</span>
              <h3 style={{
                fontSize: 24,
                fontWeight: 500,
                margin: '16px 0 10px',
                letterSpacing: 3,
              }}>
                精選商品
              </h3>
              <p style={{
                fontSize: 12,
                color: theme.textSecondary,
                fontFamily: "'Noto Sans TC', sans-serif",
              }}>
                點擊商品查看詳細資訊
              </p>
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 0,
              border: `1px solid ${theme.border}`,
              maxWidth: 400,
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
                    flex: '1 1 auto',
                    minWidth: 80,
                    padding: '12px 16px',
                    border: 'none',
                    borderRight: idx < categories.length - 1 ? `1px solid ${theme.border}` : 'none',
                    backgroundColor: selectedCategory === cat ? theme.gold : 'transparent',
                    color: selectedCategory === cat ? '#fff' : theme.textSecondary,
                    fontSize: 12,
                    letterSpacing: 1,
                    cursor: 'pointer',
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          {/* 商品展示 */}
          <section style={{
            padding: '20px 20px 80px',
            maxWidth: 1400,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginBottom: 24,
            }}>
              <span style={{
                fontSize: 11,
                color: theme.textMuted,
                fontFamily: "'Noto Sans TC', sans-serif",
              }}>
                共 {filteredProducts.length} 項商品
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 20,
            }}>
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  onClick={() => handleSelectProduct(product)}
                  style={{
                    backgroundColor: theme.bgCard,
                    border: `1px solid ${theme.border}`,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    borderRadius: 10,
                  }}
                >
                  <div style={{
                    height: 180,
                    backgroundColor: theme.cream,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 60,
                    position: 'relative',
                    borderBottom: `1px solid ${theme.border}`,
                  }}>
                    <span>{product.image}</span>

                    {product.badge && (
                      <div style={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        padding: '5px 12px',
                        background: `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldDark} 100%)`,
                        color: '#fff',
                        fontSize: 9,
                        letterSpacing: 1,
                        fontFamily: "'Noto Sans TC', sans-serif",
                        borderRadius: 2,
                      }}>
                        {product.badge}
                      </div>
                    )}
                  </div>

                  <div style={{ padding: 20 }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: 8,
                    }}>
                      <h4 style={{
                        fontSize: 17,
                        fontWeight: 500,
                        margin: 0,
                        letterSpacing: 1,
                      }}>
                        {product.name}
                      </h4>
                      <span style={{
                        fontSize: 9,
                        color: theme.gold,
                        padding: '3px 8px',
                        border: `1px solid ${theme.borderGold}`,
                        fontFamily: "'Noto Sans TC', sans-serif",
                        borderRadius: 2,
                        flexShrink: 0,
                        marginLeft: 8,
                      }}>
                        {product.category}
                      </span>
                    </div>

                    <p style={{
                      fontSize: 12,
                      color: theme.textSecondary,
                      margin: '0 0 16px 0',
                      fontFamily: "'Noto Sans TC', sans-serif",
                    }}>
                      {product.description}
                    </p>

                    <div style={{
                      height: 1,
                      background: `linear-gradient(90deg, ${theme.border}, transparent)`,
                      marginBottom: 16,
                    }} />

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                      <div>
                        <span style={{
                          fontSize: 10,
                          color: theme.textMuted,
                          fontFamily: "'Noto Sans TC', sans-serif",
                        }}>
                          NT$
                        </span>
                        <span style={{
                          fontSize: 22,
                          fontWeight: 400,
                          marginLeft: 4,
                          color: theme.gold,
                        }}>
                          {product.price}
                        </span>
                      </div>
                      <span style={{
                        fontSize: 11,
                        color: theme.gold,
                        fontFamily: "'Noto Sans TC', sans-serif",
                      }}>
                        查看詳情 →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 關於我們區塊 */}
          <section style={{
            padding: '70px 20px',
            position: 'relative',
            zIndex: 1,
            backgroundColor: theme.cream,
            borderTop: `1px solid ${theme.border}`,
          }}>
            <div style={{
              maxWidth: 800,
              margin: '0 auto',
              textAlign: 'center',
            }}>
              <span style={{ color: theme.gold, fontSize: 22 }}>✦</span>
              <h3 style={{
                fontSize: 26,
                fontWeight: 500,
                margin: '20px 0 16px',
                letterSpacing: 4,
              }}>
                關於麥香小屋
              </h3>
              <div style={{ marginBottom: 32 }}>
                <OrnamentDivider width={160} />
              </div>

              <p style={{
                fontSize: 14,
                color: theme.textSecondary,
                lineHeight: 2.4,
                fontFamily: "'Noto Sans TC', sans-serif",
                marginBottom: 48,
                padding: '0 10px',
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
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 16,
              }}>
                {[
                  { number: '5+', label: '年專業經驗' },
                  { number: '2萬+', label: '滿意顧客' },
                  { number: '50+', label: '每日品項' },
                  { number: '100%', label: '新鮮現做' },
                ].map((stat, i) => (
                  <div key={i} style={{
                    padding: '20px 16px',
                    border: `1px solid ${theme.border}`,
                    backgroundColor: theme.bgSecondary,
                    borderRadius: 8,
                  }}>
                    <p style={{
                      fontSize: 28,
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
                      fontSize: 11,
                      color: theme.textSecondary,
                      margin: '8px 0 0',
                      fontFamily: "'Noto Sans TC', sans-serif",
                      letterSpacing: 1,
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
          padding: 16,
        }} onClick={() => setShowLogin(false)}>
          <div style={{
            backgroundColor: theme.bgSecondary,
            padding: '40px 28px',
            width: '100%',
            maxWidth: 400,
            border: `1px solid ${theme.border}`,
            maxHeight: '90vh',
            overflowY: 'auto',
            borderRadius: 12,
            position: 'relative',
          }} onClick={e => e.stopPropagation()}>
            <CornerOrnament position="topLeft" />
            <CornerOrnament position="topRight" />

            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <span style={{ color: theme.gold, fontSize: 24 }}>✦</span>
              <h3 style={{
                fontSize: 24,
                fontWeight: 500,
                marginTop: 16,
                marginBottom: 8,
                letterSpacing: 3,
              }}>
                歡迎回來
              </h3>
              <p style={{
                color: theme.textSecondary,
                fontSize: 13,
                fontFamily: "'Noto Sans TC', sans-serif",
              }}>
                登入以繼續購物
              </p>
            </div>

            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: 20 }}>
                <label style={{
                  display: 'block',
                  fontSize: 11,
                  color: theme.textSecondary,
                  marginBottom: 8,
                  letterSpacing: 1,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  電子郵件
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={loginForm.email}
                  onChange={e => setLoginForm({ ...loginForm, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: 14,
                    border: `1.5px solid ${theme.border}`,
                    borderRadius: 6,
                    backgroundColor: 'transparent',
                    color: theme.text,
                    fontSize: 14,
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}
                />
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{
                  display: 'block',
                  fontSize: 11,
                  color: theme.textSecondary,
                  marginBottom: 8,
                  letterSpacing: 1,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  密碼
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={loginForm.password}
                  onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                  style={{
                    width: '100%',
                    padding: 14,
                    border: `1.5px solid ${theme.border}`,
                    borderRadius: 6,
                    backgroundColor: 'transparent',
                    color: theme.text,
                    fontSize: 14,
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}
                />
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 24,
                flexWrap: 'wrap',
                gap: 10,
              }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: 12,
                  color: theme.textSecondary,
                  cursor: 'pointer',
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  <input type="checkbox" style={{ accentColor: theme.gold }} />
                  記住我
                </label>
                <span style={{
                  fontSize: 12,
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
                  padding: 16,
                  border: 'none',
                  borderRadius: 6,
                  background: `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldDark} 100%)`,
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                  marginBottom: 24,
                  fontFamily: "'Noto Sans TC', sans-serif",
                  letterSpacing: 2,
                }}
              >
                登入
              </button>
            </form>

            <p style={{
              textAlign: 'center',
              color: theme.textSecondary,
              fontSize: 13,
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
          padding: 16,
        }} onClick={() => setShowRegister(false)}>
          <div style={{
            backgroundColor: theme.bgSecondary,
            padding: '36px 24px',
            width: '100%',
            maxWidth: 440,
            border: `1px solid ${theme.border}`,
            maxHeight: '90vh',
            overflowY: 'auto',
            borderRadius: 12,
            position: 'relative',
          }} onClick={e => e.stopPropagation()}>
            <CornerOrnament position="topLeft" />
            <CornerOrnament position="topRight" />

            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <span style={{ color: theme.gold, fontSize: 24 }}>✦</span>
              <h3 style={{
                fontSize: 24,
                fontWeight: 500,
                marginTop: 14,
                marginBottom: 8,
                letterSpacing: 3,
              }}>
                加入麥香小屋
              </h3>
              <p style={{
                color: theme.textSecondary,
                fontSize: 12,
                fontFamily: "'Noto Sans TC', sans-serif",
              }}>
                填寫以下資料，享受專屬會員優惠
              </p>
            </div>

            <form onSubmit={handleRegister}>
              {/* 基本資料 */}
              <div style={{
                borderBottom: `1px solid ${theme.border}`,
                paddingBottom: 20,
                marginBottom: 20,
              }}>
                <p style={{
                  fontSize: 10,
                  letterSpacing: 2,
                  color: theme.gold,
                  marginBottom: 16,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  ✦ 基本資料
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 12 }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 10,
                      color: theme.textSecondary,
                      marginBottom: 6,
                      fontFamily: "'Noto Sans TC', sans-serif",
                    }}>
                      姓氏 *
                    </label>
                    <input
                      type="text"
                      placeholder="王"
                      value={registerForm.lastName}
                      onChange={e => setRegisterForm({ ...registerForm, lastName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: 12,
                        border: `1.5px solid ${formErrors.lastName ? theme.gold : theme.border}`,
                        borderRadius: 6,
                        backgroundColor: 'transparent',
                        color: theme.text,
                        fontSize: 13,
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
                      fontSize: 10,
                      color: theme.textSecondary,
                      marginBottom: 6,
                      fontFamily: "'Noto Sans TC', sans-serif",
                    }}>
                      名字 *
                    </label>
                    <input
                      type="text"
                      placeholder="小明"
                      value={registerForm.firstName}
                      onChange={e => setRegisterForm({ ...registerForm, firstName: e.target.value })}
                      style={{
                        width: '100%',
                        padding: 12,
                        border: `1.5px solid ${formErrors.firstName ? theme.gold : theme.border}`,
                        borderRadius: 6,
                        backgroundColor: 'transparent',
                        color: theme.text,
                        fontSize: 13,
                        outline: 'none',
                        boxSizing: 'border-box',
                        fontFamily: "'Noto Sans TC', sans-serif",
                      }}
                    />
                    {formErrors.firstName && <span style={{ fontSize: 10, color: theme.gold }}>{formErrors.firstName}</span>}
                  </div>
                </div>

                <div style={{ marginBottom: 12 }}>
                  <label style={{
                    display: 'block',
                    fontSize: 10,
                    color: theme.textSecondary,
                    marginBottom: 6,
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}>
                    電子郵件 *
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={registerForm.email}
                    onChange={e => setRegisterForm({ ...registerForm, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: 12,
                      border: `1.5px solid ${formErrors.email ? theme.gold : theme.border}`,
                      borderRadius: 6,
                      backgroundColor: 'transparent',
                      color: theme.text,
                      fontSize: 13,
                      outline: 'none',
                      boxSizing: 'border-box',
                      fontFamily: "'Noto Sans TC', sans-serif",
                    }}
                  />
                  {formErrors.email && <span style={{ fontSize: 10, color: theme.gold }}>{formErrors.email}</span>}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 10,
                      color: theme.textSecondary,
                      marginBottom: 6,
                      fontFamily: "'Noto Sans TC', sans-serif",
                    }}>
                      手機 *
                    </label>
                    <input
                      type="tel"
                      placeholder="0912345678"
                      value={registerForm.phone}
                      onChange={e => setRegisterForm({ ...registerForm, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: 12,
                        border: `1.5px solid ${formErrors.phone ? theme.gold : theme.border}`,
                        borderRadius: 6,
                        backgroundColor: 'transparent',
                        color: theme.text,
                        fontSize: 13,
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
                      fontSize: 10,
                      color: theme.textSecondary,
                      marginBottom: 6,
                      fontFamily: "'Noto Sans TC', sans-serif",
                    }}>
                      生日 *
                    </label>
                    <input
                      type="date"
                      value={registerForm.birthDate}
                      onChange={e => setRegisterForm({ ...registerForm, birthDate: e.target.value })}
                      style={{
                        width: '100%',
                        padding: 12,
                        border: `1.5px solid ${formErrors.birthDate ? theme.gold : theme.border}`,
                        borderRadius: 6,
                        backgroundColor: 'transparent',
                        color: theme.text,
                        fontSize: 13,
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
                paddingBottom: 20,
                marginBottom: 20,
              }}>
                <p style={{
                  fontSize: 10,
                  letterSpacing: 2,
                  color: theme.gold,
                  marginBottom: 16,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  ✦ 密碼設定
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: 10,
                      color: theme.textSecondary,
                      marginBottom: 6,
                      fontFamily: "'Noto Sans TC', sans-serif",
                    }}>
                      密碼 *
                    </label>
                    <input
                      type="password"
                      placeholder="至少8字元"
                      value={registerForm.password}
                      onChange={e => setRegisterForm({ ...registerForm, password: e.target.value })}
                      style={{
                        width: '100%',
                        padding: 12,
                        border: `1.5px solid ${formErrors.password ? theme.gold : theme.border}`,
                        borderRadius: 6,
                        backgroundColor: 'transparent',
                        color: theme.text,
                        fontSize: 13,
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
                      fontSize: 10,
                      color: theme.textSecondary,
                      marginBottom: 6,
                      fontFamily: "'Noto Sans TC', sans-serif",
                    }}>
                      確認密碼 *
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={registerForm.confirmPassword}
                      onChange={e => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                      style={{
                        width: '100%',
                        padding: 12,
                        border: `1.5px solid ${formErrors.confirmPassword ? theme.gold : theme.border}`,
                        borderRadius: 6,
                        backgroundColor: 'transparent',
                        color: theme.text,
                        fontSize: 13,
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
              <div style={{ marginBottom: 24 }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  fontSize: 12,
                  color: theme.textSecondary,
                  cursor: 'pointer',
                  fontFamily: "'Noto Sans TC', sans-serif",
                  marginBottom: 10,
                }}>
                  <input
                    type="checkbox"
                    checked={registerForm.newsletter}
                    onChange={e => setRegisterForm({ ...registerForm, newsletter: e.target.checked })}
                    style={{ accentColor: theme.gold, marginTop: 2 }}
                  />
                  <span>訂閱電子報，獲得最新優惠</span>
                </label>
                <label style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  fontSize: 12,
                  color: formErrors.agreeTerms ? theme.gold : theme.textSecondary,
                  cursor: 'pointer',
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  <input
                    type="checkbox"
                    checked={registerForm.agreeTerms}
                    onChange={e => setRegisterForm({ ...registerForm, agreeTerms: e.target.checked })}
                    style={{ accentColor: theme.gold, marginTop: 2 }}
                  />
                  <span>
                    我同意 <span style={{ color: theme.gold }}>服務條款</span> 與 <span style={{ color: theme.gold }}>隱私權政策</span> *
                  </span>
                </label>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: 16,
                  border: 'none',
                  borderRadius: 6,
                  background: `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldDark} 100%)`,
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                  marginBottom: 20,
                  fontFamily: "'Noto Sans TC', sans-serif",
                  letterSpacing: 2,
                }}
              >
                建立帳號
              </button>
            </form>

            <p style={{
              textAlign: 'center',
              color: theme.textSecondary,
              fontSize: 13,
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
        }} onClick={() => setShowCart(false)}>
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '100%',
            maxWidth: 400,
            backgroundColor: theme.bgSecondary,
            borderLeft: `1px solid ${theme.border}`,
            display: 'flex',
            flexDirection: 'column',
            animation: 'slideInRight 0.3s ease',
          }} onClick={e => e.stopPropagation()}>
            <div style={{
              padding: '24px 20px',
              borderBottom: `1px solid ${theme.border}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <h3 style={{
                  fontSize: 20,
                  fontWeight: 500,
                  margin: 0,
                  letterSpacing: 2,
                }}>
                  購物袋
                </h3>
                <p style={{
                  fontSize: 11,
                  color: theme.textSecondary,
                  margin: '4px 0 0',
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  共 {totalItems} 件商品
                </p>
              </div>
              <button
                onClick={() => setShowCart(false)}
                style={{
                  width: 36,
                  height: 36,
                  border: `1px solid ${theme.border}`,
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  fontSize: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: theme.text,
                  borderRadius: 6,
                }}
              >
                ✕
              </button>
            </div>

            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px',
            }}>
              {cart.length === 0 ? (
                <div style={{
                  textAlign: 'center',
                  paddingTop: 60,
                  color: theme.textSecondary,
                }}>
                  <p style={{ fontSize: 56, marginBottom: 20 }}>🧺</p>
                  <p style={{ fontSize: 16, marginBottom: 8, letterSpacing: 2 }}>購物袋是空的</p>
                  <p style={{ fontSize: 13, fontFamily: "'Noto Sans TC', sans-serif" }}>
                    快來探索我們的美味吧
                  </p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} style={{
                    display: 'flex',
                    gap: 16,
                    paddingBottom: 20,
                    marginBottom: 20,
                    borderBottom: `1px solid ${theme.border}`,
                  }}>
                    <div style={{
                      width: 64,
                      height: 64,
                      backgroundColor: theme.cream,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 28,
                      flexShrink: 0,
                      border: `1px solid ${theme.border}`,
                      borderRadius: 6,
                    }}>
                      {item.image}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{
                        fontSize: 14,
                        fontWeight: 500,
                        margin: '0 0 4px 0',
                      }}>
                        {item.name}
                      </h4>
                      <p style={{
                        fontSize: 13,
                        color: theme.gold,
                        margin: '0 0 12px 0',
                        fontFamily: "'Noto Sans TC', sans-serif",
                      }}>
                        NT$ {item.price}
                      </p>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                      }}>
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          style={{
                            width: 28,
                            height: 28,
                            border: `1px solid ${theme.border}`,
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            color: theme.text,
                            fontSize: 14,
                            borderRadius: 4,
                          }}
                        >
                          −
                        </button>
                        <span style={{ fontSize: 13, minWidth: 24, textAlign: 'center', fontFamily: "'Noto Sans TC', sans-serif" }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          style={{
                            width: 28,
                            height: 28,
                            border: `1px solid ${theme.border}`,
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            color: theme.text,
                            fontSize: 14,
                            borderRadius: 4,
                          }}
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
                            fontSize: 11,
                            fontFamily: "'Noto Sans TC', sans-serif",
                          }}
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
                padding: '20px',
                borderTop: `1px solid ${theme.border}`,
                backgroundColor: theme.cream,
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  <span style={{ fontSize: 12, color: theme.textSecondary }}>小計</span>
                  <span style={{ fontSize: 14 }}>NT$ {totalPrice}</span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  fontFamily: "'Noto Sans TC', sans-serif",
                }}>
                  <span style={{ fontSize: 12, color: theme.textSecondary }}>運費</span>
                  <span style={{ fontSize: 14, color: theme.gold }}>
                    {totalPrice >= 500 ? '免運費' : 'NT$ 60'}
                  </span>
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                  paddingTop: 16,
                  borderTop: `1px solid ${theme.border}`,
                }}>
                  <span style={{ fontSize: 13, fontFamily: "'Noto Sans TC', sans-serif" }}>總計</span>
                  <span style={{ fontSize: 24, fontWeight: 400, color: theme.gold }}>
                    NT$ {totalPrice + (totalPrice >= 500 ? 0 : 60)}
                  </span>
                </div>
                <button
                  onClick={handleCheckout}
                  disabled={checkoutComplete}
                  style={{
                    width: '100%',
                    padding: 16,
                    border: 'none',
                    background: checkoutComplete
                      ? theme.textMuted
                      : `linear-gradient(135deg, ${theme.gold} 0%, ${theme.goldDark} 100%)`,
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: checkoutComplete ? 'default' : 'pointer',
                    letterSpacing: 2,
                    fontFamily: "'Noto Sans TC', sans-serif",
                    borderRadius: 6,
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
        padding: '60px 20px 32px',
        borderTop: `1px solid ${theme.border}`,
        backgroundColor: theme.bgSecondary,
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 32,
        }}>
          <div>
            <p style={{
              fontSize: 9,
              letterSpacing: 3,
              color: theme.gold,
              margin: '0 0 8px 0',
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              ─ 手工烘焙坊 ─
            </p>
            <h4 style={{
              fontSize: 20,
              fontWeight: 600,
              margin: '0 0 16px 0',
              letterSpacing: 4,
            }}>
              麥香小屋
            </h4>
            <p style={{
              fontSize: 13,
              color: theme.textSecondary,
              lineHeight: 2,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              承襲法式傳統工藝<br />
              每日新鮮手工烘焙
            </p>
          </div>

          <div>
            <h5 style={{
              fontSize: 11,
              letterSpacing: 2,
              marginBottom: 20,
              color: theme.gold,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              商品分類
            </h5>
            {['麵包', '甜點', '蛋糕', '季節限定'].map(item => (
              <p key={item} style={{
                fontSize: 13,
                marginBottom: 12,
                cursor: 'pointer',
                color: theme.textSecondary,
                fontFamily: "'Noto Sans TC', sans-serif",
              }}>
                {item}
              </p>
            ))}
          </div>

          <div>
            <h5 style={{
              fontSize: 11,
              letterSpacing: 2,
              marginBottom: 20,
              color: theme.gold,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              關於我們
            </h5>
            {['品牌故事', '門市據點', '聯絡我們'].map(item => (
              <p key={item} style={{
                fontSize: 13,
                marginBottom: 12,
                cursor: 'pointer',
                color: theme.textSecondary,
                fontFamily: "'Noto Sans TC', sans-serif",
              }}>
                {item}
              </p>
            ))}
          </div>

          <div>
            <h5 style={{
              fontSize: 11,
              letterSpacing: 2,
              marginBottom: 20,
              color: theme.gold,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              聯絡資訊
            </h5>
            <p style={{
              fontSize: 12,
              marginBottom: 10,
              color: theme.textSecondary,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              📍 台北市大安區敦化南路一段88號
            </p>
            <p style={{
              fontSize: 12,
              marginBottom: 10,
              color: theme.textSecondary,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              📞 (02) 2771-8888
            </p>
            <p style={{
              fontSize: 12,
              marginBottom: 16,
              color: theme.textSecondary,
              fontFamily: "'Noto Sans TC', sans-serif",
            }}>
              ⏰ 每日 07:00 - 20:00
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {['FB', 'IG', 'LINE'].map((icon, i) => (
                <span key={i} style={{
                  width: 36,
                  height: 36,
                  border: `1px solid ${theme.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: 11,
                  fontFamily: "'Noto Sans TC', sans-serif",
                  borderRadius: 6,
                  color: theme.textSecondary,
                }}>
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          maxWidth: 1200,
          margin: '40px auto 0',
          paddingTop: 24,
          borderTop: `1px solid ${theme.border}`,
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: 11,
            color: theme.textMuted,
            fontFamily: "'Noto Sans TC', sans-serif",
          }}>
            © 2025 麥香小屋 版權所有
          </p>
        </div>
      </footer>

      {/* CSS 動畫與響應式 */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;600&family=Noto+Serif+TC:wght@300;400;500;600;700&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
        
        /* 響應式設計 */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          
          .desktop-user {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: flex !important;
          }
          
          .login-btn {
            display: none !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
          
          .product-detail-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 60px !important;
          }
        }
        
        @media (min-width: 1024px) {
          .product-detail-grid {
            gap: 80px !important;
          }
        }
        
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${theme.border};
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}
