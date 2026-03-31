// ═══════════════════════════════════════
// TRANSLATIONS / i18n
// ═══════════════════════════════════════
const translations = {
  pt: {
    loginSub: 'Faça seu login para continuar', signupSub: 'Crie sua conta para continuar',
    tabLogin: 'Entrar', tabSignup: 'Cadastrar', labelName: 'Nome', labelEmail: 'Email', labelPass: 'Senha',
    placeholderName: 'Digite seu nome', placeholderEmail: 'Digite seu email',
    btnEnter: 'Entrar', btnSignup: 'Cadastrar', forgotPass: 'Esqueceu a senha?',
    noAccount: 'Não tem uma conta? ', hasAccount: 'Já tem uma conta? ',
    registerLink: 'Cadastre-se', loginLink: 'Fazer login', orWith: 'Ou continue com',
    greeting: 'Para onde você vai hoje?', searchPlaceholder: 'Pesquisar destino...',
    savedPlaces: 'Lugares salvos', addPlace: '+ Adicionar', navHome: 'Início', navAccount: 'Conta',
    searchTitle: 'Para onde?', originPlaceholder: 'Sua localização atual', destPlaceholder: 'Para onde?',
    searchBtn: 'Buscar viagem', popularDests: 'Destinos populares',
    recentHistory: 'Histórico', noResults: 'Nenhum resultado encontrado',
    noResultsSub: 'Pressione "Buscar viagem" para continuar',
    chooseTransport: 'Escolha seu transporte', tripOriginLabel: 'Origem', tripDestLabel: 'Destino',
    confirmTrip: 'Confirmar viagem', lookingDriver: 'Aguarde enquanto encontramos um motorista próximo a você...',
    tripConfirmed: '✅ Viagem confirmada!', driverWay: 'Viagem confirmada! Motorista a caminho.',
    editProfile: 'Editar perfil', accountMenu: 'Conta', accountDesc: 'Dados pessoais e preferências',
    paymentsMenu: 'Pagamentos', paymentsDesc: 'Métodos de pagamento',
    securityMenu: 'Segurança', securityDesc: 'Senha e autenticação',
    tripsMenu: 'Viagens', tripsDesc: 'Histórico de viagens',
    notifsMenu: 'Notificações', notifsDesc: 'Preferências de notificação',
    settingsMenu: 'Configurações', settingsDesc: 'Configurações do aplicativo',
    logout: 'Sair', logoutSub: 'Fazer logout da conta',
    statTrips: 'Viagens', statRating: 'Avaliação', statPhone: 'Telefone',
    editProfileTitle: 'Editar Perfil', labelFullName: 'Nome completo', labelPhone: 'Telefone',
    cancel: 'Cancelar', save: 'Salvar', securityTitle: 'Segurança',
    currentPass: 'Senha atual', newPass: 'Nova senha', confirmPass: 'Confirmar nova senha',
    updatePass: 'Atualizar senha', paymentsTitle: 'Pagamentos',
    noPayment: 'Nenhum método de pagamento cadastrado', addPayment: '+ Adicionar método',
    tripsTitle: 'Histórico de Viagens', noTrips: 'Nenhuma viagem realizada ainda',
    notifsTitle: 'Notificações', promoNotif: 'Promoções', promoSub: 'Descontos e ofertas especiais',
    tripNotif: 'Status da viagem', tripSub: 'Atualizações em tempo real',
    emailNotif: 'E-mail', emailSub: 'Recebimentos por e-mail',
    settingsTitle: 'Configurações', darkMode: 'Modo escuro', darkModeSub: 'Interface no tema escuro',
    langLabel: 'Idioma', langSub: 'Selecione o idioma do app',
    deleteAccount: 'Excluir conta',
    deleteConfirm: 'Tem certeza que deseja excluir sua conta? Esta ação é irreversível.',
    deleteSupport: 'Entre em contato com o suporte para excluir sua conta.',
    forgotTitle: 'Recuperar Senha',
    forgotDesc: 'Digite seu e-mail e enviaremos um link para redefinir sua senha.',
    sendLink: 'Enviar link', addPlaceTitle: 'Adicionar Lugar', chooseIcon: 'Escolha um ícone',
    placeName: 'Nome do lugar', placeAddress: 'Endereço',
    placeNamePlaceholder: 'Ex: Trabalho, Academia...', placeAddrPlaceholder: 'Digite o endereço completo',
    add: 'Adicionar',
    toastFillEmail: 'Preencha email e senha', toastFillAll: 'Preencha todos os campos.',
    toastPasswordsDiff: 'As senhas não coincidem.', toastPassShort: 'A nova senha precisa ter ao menos 6 caracteres.',
    toastPassUpdated: 'Senha atualizada com sucesso!', toastProfileUpdated: 'Perfil atualizado!',
    toastPlaceAdded: 'Lugar adicionado com sucesso!', toastFillNameAddr: 'Preencha nome e endereço',
    toastNameEmpty: 'O nome não pode ficar vazio.', toastPhotoUpdated: 'Foto atualizada com sucesso!',
    toastPhotoError: 'Erro ao salvar foto', toastPrefsSaved: 'Preferências salvas',
    toastEmailRequired: 'Digite seu e-mail.', toastLinkSent: 'Link enviado para ',
    toastLocationError: 'Não foi possível obter sua localização',
    toastLocationObtained: 'Localização obtida!', toastEnterDest: 'Digite o destino',
    myLocation: 'Minha localização', locating: 'Localizando...',
    installTitle: 'Instalar Zuno', installSub: 'Adicione à tela inicial', install: 'Instalar',
    fromLabel: 'De: ',
  },
  en: {
    loginSub: 'Log in to continue', signupSub: 'Create your account to continue',
    tabLogin: 'Login', tabSignup: 'Sign Up', labelName: 'Name', labelEmail: 'Email', labelPass: 'Password',
    placeholderName: 'Enter your name', placeholderEmail: 'Enter your email',
    btnEnter: 'Login', btnSignup: 'Sign Up', forgotPass: 'Forgot password?',
    noAccount: "Don't have an account? ", hasAccount: 'Already have an account? ',
    registerLink: 'Sign Up', loginLink: 'Login', orWith: 'Or continue with',
    greeting: 'Where are you going today?', searchPlaceholder: 'Search destination...',
    savedPlaces: 'Saved places', addPlace: '+ Add', navHome: 'Home', navAccount: 'Account',
    searchTitle: 'Where to?', originPlaceholder: 'Your current location', destPlaceholder: 'Where to?',
    searchBtn: 'Search ride', popularDests: 'Popular destinations',
    recentHistory: 'History', noResults: 'No results found',
    noResultsSub: 'Press "Search ride" to continue',
    chooseTransport: 'Choose your transport', tripOriginLabel: 'Origin', tripDestLabel: 'Destination',
    confirmTrip: 'Confirm ride', lookingDriver: 'Please wait while we find a nearby driver...',
    tripConfirmed: '✅ Ride confirmed!', driverWay: 'Ride confirmed! Driver on the way.',
    editProfile: 'Edit profile', accountMenu: 'Account', accountDesc: 'Personal data and preferences',
    paymentsMenu: 'Payments', paymentsDesc: 'Payment methods',
    securityMenu: 'Security', securityDesc: 'Password and authentication',
    tripsMenu: 'Trips', tripsDesc: 'Trip history',
    notifsMenu: 'Notifications', notifsDesc: 'Notification preferences',
    settingsMenu: 'Settings', settingsDesc: 'App settings',
    logout: 'Logout', logoutSub: 'Log out of account',
    statTrips: 'Trips', statRating: 'Rating', statPhone: 'Phone',
    editProfileTitle: 'Edit Profile', labelFullName: 'Full name', labelPhone: 'Phone',
    cancel: 'Cancel', save: 'Save', securityTitle: 'Security',
    currentPass: 'Current password', newPass: 'New password', confirmPass: 'Confirm new password',
    updatePass: 'Update password', paymentsTitle: 'Payments',
    noPayment: 'No payment method registered', addPayment: '+ Add method',
    tripsTitle: 'Trip History', noTrips: 'No trips yet',
    notifsTitle: 'Notifications', promoNotif: 'Promotions', promoSub: 'Discounts and special offers',
    tripNotif: 'Trip status', tripSub: 'Real-time updates',
    emailNotif: 'E-mail', emailSub: 'Email notifications',
    settingsTitle: 'Settings', darkMode: 'Dark mode', darkModeSub: 'Dark theme interface',
    langLabel: 'Language', langSub: 'Select app language',
    deleteAccount: 'Delete account',
    deleteConfirm: 'Are you sure you want to delete your account? This action is irreversible.',
    deleteSupport: 'Please contact support to delete your account.',
    forgotTitle: 'Reset Password',
    forgotDesc: 'Enter your email and we will send you a reset link.',
    sendLink: 'Send link', addPlaceTitle: 'Add Place', chooseIcon: 'Choose an icon',
    placeName: 'Place name', placeAddress: 'Address',
    placeNamePlaceholder: 'E.g.: Work, Gym...', placeAddrPlaceholder: 'Enter full address',
    add: 'Add',
    toastFillEmail: 'Fill in email and password', toastFillAll: 'Fill in all fields.',
    toastPasswordsDiff: "Passwords don't match.", toastPassShort: 'New password must be at least 6 characters.',
    toastPassUpdated: 'Password updated!', toastProfileUpdated: 'Profile updated!',
    toastPlaceAdded: 'Place added!', toastFillNameAddr: 'Fill in name and address',
    toastNameEmpty: 'Name cannot be empty.', toastPhotoUpdated: 'Photo updated!',
    toastPhotoError: 'Error saving photo', toastPrefsSaved: 'Preferences saved',
    toastEmailRequired: 'Enter your email.', toastLinkSent: 'Link sent to ',
    toastLocationError: 'Could not get your location',
    toastLocationObtained: 'Location obtained!', toastEnterDest: 'Enter destination',
    myLocation: 'My location', locating: 'Locating...',
    installTitle: 'Install Zuno', installSub: 'Add to home screen', install: 'Install',
    fromLabel: 'From: ',
  },
  es: {
    loginSub: 'Inicia sesión para continuar', signupSub: 'Crea tu cuenta para continuar',
    tabLogin: 'Entrar', tabSignup: 'Registrarse', labelName: 'Nombre', labelEmail: 'Correo', labelPass: 'Contraseña',
    placeholderName: 'Escribe tu nombre', placeholderEmail: 'Escribe tu correo',
    btnEnter: 'Entrar', btnSignup: 'Registrarse', forgotPass: '¿Olvidaste tu contraseña?',
    noAccount: '¿No tienes cuenta? ', hasAccount: '¿Ya tienes cuenta? ',
    registerLink: 'Regístrate', loginLink: 'Iniciar sesión', orWith: 'O continúa con',
    greeting: '¿A dónde vas hoy?', searchPlaceholder: 'Buscar destino...',
    savedPlaces: 'Lugares guardados', addPlace: '+ Agregar', navHome: 'Inicio', navAccount: 'Cuenta',
    searchTitle: '¿A dónde?', originPlaceholder: 'Tu ubicación actual', destPlaceholder: '¿A dónde?',
    searchBtn: 'Buscar viaje', popularDests: 'Destinos populares',
    recentHistory: 'Historial', noResults: 'Sin resultados',
    noResultsSub: 'Presiona "Buscar viaje" para continuar',
    chooseTransport: 'Elige tu transporte', tripOriginLabel: 'Origen', tripDestLabel: 'Destino',
    confirmTrip: 'Confirmar viaje', lookingDriver: 'Espera mientras encontramos un conductor cercano...',
    tripConfirmed: '✅ ¡Viaje confirmado!', driverWay: '¡Viaje confirmado! Conductor en camino.',
    editProfile: 'Editar perfil', accountMenu: 'Cuenta', accountDesc: 'Datos personales y preferencias',
    paymentsMenu: 'Pagos', paymentsDesc: 'Métodos de pago',
    securityMenu: 'Seguridad', securityDesc: 'Contraseña y autenticación',
    tripsMenu: 'Viajes', tripsDesc: 'Historial de viajes',
    notifsMenu: 'Notificaciones', notifsDesc: 'Preferencias de notificación',
    settingsMenu: 'Configuración', settingsDesc: 'Configuración de la aplicación',
    logout: 'Salir', logoutSub: 'Cerrar sesión',
    statTrips: 'Viajes', statRating: 'Calificación', statPhone: 'Teléfono',
    editProfileTitle: 'Editar Perfil', labelFullName: 'Nombre completo', labelPhone: 'Teléfono',
    cancel: 'Cancelar', save: 'Guardar', securityTitle: 'Seguridad',
    currentPass: 'Contraseña actual', newPass: 'Nueva contraseña', confirmPass: 'Confirmar contraseña',
    updatePass: 'Actualizar contraseña', paymentsTitle: 'Pagos',
    noPayment: 'Ningún método de pago registrado', addPayment: '+ Agregar método',
    tripsTitle: 'Historial de Viajes', noTrips: 'Ningún viaje realizado aún',
    notifsTitle: 'Notificaciones', promoNotif: 'Promociones', promoSub: 'Descuentos y ofertas especiales',
    tripNotif: 'Estado del viaje', tripSub: 'Actualizaciones en tiempo real',
    emailNotif: 'Correo', emailSub: 'Notificaciones por correo',
    settingsTitle: 'Configuración', darkMode: 'Modo oscuro', darkModeSub: 'Interfaz con tema oscuro',
    langLabel: 'Idioma', langSub: 'Selecciona el idioma de la app',
    deleteAccount: 'Eliminar cuenta',
    deleteConfirm: '¿Estás seguro de eliminar tu cuenta? Esta acción es irreversible.',
    deleteSupport: 'Contacta con soporte para eliminar tu cuenta.',
    forgotTitle: 'Recuperar Contraseña',
    forgotDesc: 'Escribe tu correo y te enviaremos un enlace de restablecimiento.',
    sendLink: 'Enviar enlace', addPlaceTitle: 'Agregar Lugar', chooseIcon: 'Elige un ícono',
    placeName: 'Nombre del lugar', placeAddress: 'Dirección',
    placeNamePlaceholder: 'Ej: Trabajo, Gimnasio...', placeAddrPlaceholder: 'Escribe la dirección completa',
    add: 'Agregar',
    toastFillEmail: 'Completa correo y contraseña', toastFillAll: 'Completa todos los campos.',
    toastPasswordsDiff: 'Las contraseñas no coinciden.', toastPassShort: 'Mínimo 6 caracteres.',
    toastPassUpdated: '¡Contraseña actualizada!', toastProfileUpdated: '¡Perfil actualizado!',
    toastPlaceAdded: '¡Lugar agregado!', toastFillNameAddr: 'Completa nombre y dirección',
    toastNameEmpty: 'El nombre no puede estar vacío.', toastPhotoUpdated: '¡Foto actualizada!',
    toastPhotoError: 'Error al guardar foto', toastPrefsSaved: 'Preferencias guardadas',
    toastEmailRequired: 'Escribe tu correo.', toastLinkSent: 'Enlace enviado a ',
    toastLocationError: 'No se pudo obtener tu ubicación',
    toastLocationObtained: '¡Ubicación obtenida!', toastEnterDest: 'Escribe el destino',
    myLocation: 'Mi ubicación', locating: 'Localizando...',
    installTitle: 'Instalar Zuno', installSub: 'Agregar a la pantalla de inicio', install: 'Instalar',
    fromLabel: 'De: ',
  }
};

let currentLang = localStorage.getItem('zunoLang') || 'pt';
let i18n = translations[currentLang];

// ═══════════════════════════════════════
// ESTADO GLOBAL & DADOS
// ═══════════════════════════════════════
let state = {
  user: null,
  currentScreen: 'login',
  destination: '',
  origin: '',
  selectedVehicle: 'popular',
  confirming: false,
  savedPlaces: [
    { icon: '🏠', label: 'Casa', address: 'Rua das Flores, 123' },
    { icon: '⭐', label: 'Casa da Vovó', address: 'Av. Principal, 456' }
  ],
  selectedEmoji: '📍',
  isSignup: false,
  tripsHistory: [],
  isDark: true
};

const vehicles = [
  { id: 'popular', name: 'Carro Popular', icon: '🚗', price: 'R$ 15,00', eta: '3 min', desc: 'Opção econômica', cap: '4 passageiros' },
  { id: 'comfort', name: 'Conforto', icon: '🚘', price: 'R$ 22,00', eta: '5 min', desc: 'Carros mais novos', cap: '4 passageiros' },
  { id: 'motorcycle', name: 'Motocicleta', icon: '🏍️', price: 'R$ 10,00', eta: '2 min', desc: 'Mais rápido', cap: '1 passageiro' },
  { id: 'xl', name: 'Zuno XL', icon: '🚙', price: 'R$ 28,00', eta: '6 min', desc: 'Para grupos', cap: '6 passageiros' },
  { id: 'public', name: 'Transporte Público', icon: '🚌', price: 'R$ 7,00', eta: '8 min', desc: 'Rota de ônibus', cap: 'Múltiplos' }
];

const popularDests = [
  { name: 'Shopping Center', address: 'Av. Paulista, 1000' },
  { name: 'Aeroporto Internacional', address: 'Rod. Hélio Smidt, s/n' },
  { name: 'Centro Histórico', address: 'Praça da República' },
  { name: 'Estação de Metrô Central', address: 'Av. São João, 200' },
  { name: 'Hospital São Lucas', address: 'Rua dos Médicos, 500' },
  { name: 'Universidade Estadual', address: 'Campus Principal' }
];

// Fictional trip history
const fictionalHistory = [
  { destination: 'Shopping Center', origin: 'Rua das Flores, 123', vehicle: 'Carro Popular', price: 'R$ 15,00', date: '29/03/2026 14:32', icon: '🛒' },
  { destination: 'Aeroporto Internacional', origin: 'Av. Paulista, 500', vehicle: 'Conforto', price: 'R$ 38,00', date: '25/03/2026 07:15', icon: '✈️' },
  { destination: 'Hospital São Lucas', origin: 'Casa da Vovó', vehicle: 'Carro Popular', price: 'R$ 18,00', date: '20/03/2026 09:45', icon: '🏥' },
  { destination: 'Universidade Estadual', origin: 'Av. Brasil, 200', vehicle: 'Motocicleta', price: 'R$ 10,00', date: '15/03/2026 07:50', icon: '🎓' },
  { destination: 'Centro Histórico', origin: 'Rua das Flores, 123', vehicle: 'Zuno XL', price: 'R$ 28,00', date: '10/03/2026 19:20', icon: '🏛️' },
];

const emojis = ['📍', '🏠', '⭐', '💼', '🏢', '🏥', '🎓', '🏋️', '🍽️', '☕', '🛒', '✈️'];

// ═══════════════════════════════════════
// DARK / LIGHT MODE
// ═══════════════════════════════════════
function initTheme() {
  const saved = localStorage.getItem('zunoTheme');
  state.isDark = saved !== 'light';
  applyTheme();
}

function applyTheme() {
  document.body.classList.toggle('light-mode', !state.isDark);
  const toggle = document.getElementById('setting-dark');
  if (toggle) toggle.checked = state.isDark;
}

function toggleDarkMode(isDark) {
  state.isDark = isDark;
  localStorage.setItem('zunoTheme', isDark ? 'dark' : 'light');
  applyTheme();
}

// ═══════════════════════════════════════
// LANGUAGE
// ═══════════════════════════════════════
function setLanguage(lang) {
  currentLang = lang;
  i18n = translations[lang];
  localStorage.setItem('zunoLang', lang);
  ['pt','en','es'].forEach(l => {
    const btn = document.getElementById('lang-' + l);
    if (btn) btn.classList.toggle('active', l === lang);
  });
  applyTranslations();
  renderSavedPlaces();
  if (state.currentScreen === 'search') renderSearch(document.getElementById('search-field')?.value || '');
  if (state.currentScreen === 'trip') renderTrip();
  if (state.currentScreen === 'profile') applyProfileTranslations();
}

function applyTranslations() {
  // Search screen
  setTxt('search-header-title', i18n.searchTitle);
  setAttr('origin-field', 'placeholder', i18n.originPlaceholder);
  setAttr('search-field', 'placeholder', i18n.destPlaceholder);
  setTxt('search-confirm-text', i18n.searchBtn);
  // Trip screen
  setTxt('trip-origin-label', i18n.tripOriginLabel);
  setTxt('trip-dest-label', i18n.tripDestLabel);
  setTxt('trip-title', i18n.chooseTransport);
  setTxt('confirm-btn-text', i18n.confirmTrip);
  // Settings modal
  setTxt('settings-title', i18n.settingsTitle);
  setTxt('s-darkmode-label', i18n.darkMode);
  setTxt('s-darkmode-sub', i18n.darkModeSub);
  setTxt('s-lang-label', i18n.langLabel);
  setTxt('s-lang-sub', i18n.langSub);
  setTxt('s-delete-label', i18n.deleteAccount);
  // Notif modal
  setTxt('notif-modal-title', i18n.notifsTitle);
  setTxt('notif-promo-label', i18n.promoNotif);
  setTxt('notif-promo-sub', i18n.promoSub);
  setTxt('notif-trip-label', i18n.tripNotif);
  setTxt('notif-trip-sub', i18n.tripSub);
  setTxt('notif-email-label', i18n.emailNotif);
  setTxt('notif-email-sub', i18n.emailSub);
  // Trips modal
  setTxt('trips-modal-title', i18n.tripsTitle);
  // Home search bar
  const searchBarSpan = document.querySelector('.search-bar-btn span');
  if (searchBarSpan) searchBarSpan.textContent = i18n.searchPlaceholder;
  // PWA banner
  const installStrong = document.querySelector('.install-text strong');
  if (installStrong) installStrong.textContent = i18n.installTitle;
  const installSub = document.querySelector('.install-text');
  if (installSub && installSub.childNodes[2]) installSub.childNodes[2].textContent = i18n.installSub;
  const installBtn = document.getElementById('install-btn');
  if (installBtn) installBtn.textContent = i18n.install;
}

function setTxt(id, txt) { const el = document.getElementById(id); if (el && txt) el.textContent = txt; }
function setAttr(id, attr, val) { const el = document.getElementById(id); if (el && val) el.setAttribute(attr, val); }

function applyProfileTranslations() {
  const names = [i18n.accountMenu, i18n.paymentsMenu, i18n.securityMenu, i18n.tripsMenu, i18n.notifsMenu, i18n.settingsMenu];
  const descs = [i18n.accountDesc, i18n.paymentsDesc, i18n.securityDesc, i18n.tripsDesc, i18n.notifsDesc, i18n.settingsDesc];
  document.querySelectorAll('.menu-item .menu-name').forEach((el, i) => { if (names[i]) el.textContent = names[i]; });
  document.querySelectorAll('.menu-item .menu-desc').forEach((el, i) => { if (descs[i]) el.textContent = descs[i]; });
  const logoutLabel = document.querySelector('.logout-label');
  if (logoutLabel) logoutLabel.textContent = i18n.logout;
  const logoutSub = document.querySelector('.logout-sub');
  if (logoutSub) logoutSub.textContent = i18n.logoutSub;
  const editBtn = document.querySelector('.edit-profile-btn');
  if (editBtn) editBtn.textContent = i18n.editProfile;
  const statLabels = document.querySelectorAll('.stat-label');
  [i18n.statTrips, i18n.statRating, i18n.statPhone].forEach((txt, i) => { if (statLabels[i]) statLabels[i].textContent = txt; });
  const greetingPara = document.querySelectorAll('#screen-home .greeting');
  if (greetingPara[1]) greetingPara[1].textContent = i18n.greeting;
}

// ═══════════════════════════════════════
// GEOLOCATION
// ═══════════════════════════════════════
function useMyLocation() {
  const originField = document.getElementById('origin-field');
  if (!originField) return;
  originField.value = i18n.locating;
  originField.disabled = true;

  if (!navigator.geolocation) {
    originField.value = '';
    originField.disabled = false;
    showToast(i18n.toastLocationError);
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude, longitude } = pos.coords;
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=${currentLang}`);
        const data = await res.json();
        const addr = data.display_name
          ? data.display_name.split(',').slice(0, 3).join(', ')
          : latitude.toFixed(4) + ', ' + longitude.toFixed(4);
        originField.value = addr;
        state.origin = addr;
        showToast(i18n.toastLocationObtained);
      } catch {
        const addr = latitude.toFixed(4) + ', ' + longitude.toFixed(4);
        originField.value = addr;
        state.origin = addr;
        showToast(i18n.toastLocationObtained);
      }
      originField.disabled = false;
    },
    () => {
      originField.value = '';
      originField.disabled = false;
      showToast(i18n.toastLocationError);
    },
    { timeout: 8000 }
  );
}

function onOriginInput(val) { state.origin = val; }

function tryAutoLocation() {
  const originField = document.getElementById('origin-field');
  if (!originField || originField.value) return;
  if (!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude, longitude } = pos.coords;
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&accept-language=${currentLang}`);
        const data = await res.json();
        const addr = data.display_name
          ? data.display_name.split(',').slice(0, 3).join(', ')
          : latitude.toFixed(4) + ', ' + longitude.toFixed(4);
        if (originField && !originField.value) { originField.value = addr; state.origin = addr; }
      } catch { }
    },
    () => {},
    { timeout: 5000 }
  );
}

// ═══════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════
function navigate(screen, dest) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + screen).classList.add('active');
  state.currentScreen = screen;

  if (screen === 'trip' && dest) { state.destination = dest; renderTrip(); }

  if (screen === 'home') {
    renderSavedPlaces();
    document.getElementById('home-scroll').scrollTop = 0;
    updateAvatarHome();
  }

  if (screen === 'profile' && state.user) {
    document.getElementById('profile-name').textContent = state.user.name;
    document.getElementById('profile-email').textContent = state.user.email;
    if (state.user.phone) document.getElementById('stat-phone').textContent = state.user.phone;
    if (state.user.trips !== undefined) document.getElementById('stat-trips').textContent = state.user.trips;
    updateAvatarProfile();
    applyProfileTranslations();
  }

  if (screen === 'search') {
    renderSearch('');
    const sf = document.getElementById('search-field');
    if (sf) sf.value = '';
    const cb = document.getElementById('clear-btn');
    if (cb) cb.style.display = 'none';
    const scb = document.getElementById('search-confirm-btn');
    if (scb) scb.style.display = 'none';
    setTimeout(() => {
      if (sf) sf.focus();
      tryAutoLocation();
    }, 120);
  }
}

// ═══════════════════════════════════════
// AVATAR / FOTO
// ═══════════════════════════════════════
function updateAvatarProfile() {
  const inner = document.getElementById('avatar-inner');
  if (!inner) return;
  if (state.user && state.user.photoURL) {
    inner.innerHTML = '<img src="' + state.user.photoURL + '" alt="foto" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">';
  } else {
    inner.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
  }
}

function updateAvatarHome() {
  const btn = document.getElementById('avatar-btn-home');
  if (!btn) return;
  if (state.user && state.user.photoURL) {
    btn.innerHTML = '<img src="' + state.user.photoURL + '" alt="foto" style="width:36px;height:36px;border-radius:50%;object-fit:cover;">';
  } else {
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
  }
}

async function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file || !state.user) return;
  try {
    const reader = new FileReader();
    reader.onload = (e) => {
      const photoBase64 = e.target.result;
      const photos = JSON.parse(localStorage.getItem('userPhotos') || '{}');
      photos[state.user.uid] = photoBase64;
      localStorage.setItem('userPhotos', JSON.stringify(photos));
      const inner = document.getElementById('avatar-inner');
      if (inner) inner.innerHTML = '<img src="' + photoBase64 + '" alt="foto" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">';
      state.user.photoURL = photoBase64;
      updateAvatarHome();
      showToast(i18n.toastPhotoUpdated);
    };
    reader.readAsDataURL(file);
  } catch { showToast(i18n.toastPhotoError); }
  event.target.value = '';
}

function loadUserPhoto() {
  if (!state.user) return;
  const photos = JSON.parse(localStorage.getItem('userPhotos') || '{}');
  const photoBase64 = photos[state.user.uid];
  if (photoBase64) { state.user.photoURL = photoBase64; updateAvatarProfile(); updateAvatarHome(); }
}

// ═══════════════════════════════════════
// LOGIN
// ═══════════════════════════════════════
function switchTab(tab) {
  state.isSignup = tab === 'signup';
  document.getElementById('tab-login').classList.toggle('active', tab === 'login');
  document.getElementById('tab-signup').classList.toggle('active', tab === 'signup');
  const nameGroup = document.getElementById('signup-name-group');
  if (nameGroup) nameGroup.style.display = state.isSignup ? 'block' : 'none';
  const socialSection = document.getElementById('social-section');
  if (socialSection) socialSection.style.display = state.isSignup ? 'none' : 'block';
  const forgotLink = document.getElementById('forgot-link');
  if (forgotLink) forgotLink.style.display = state.isSignup ? 'none' : 'block';
  document.getElementById('login-subtitle').textContent = state.isSignup ? i18n.signupSub : i18n.loginSub;
  const btnPrimary = document.querySelector('.btn-primary');
  if (btnPrimary) btnPrimary.textContent = state.isSignup ? i18n.btnSignup : i18n.btnEnter;
  const switchText = document.getElementById('switch-text');
  if (switchText) switchText.textContent = state.isSignup ? i18n.hasAccount : i18n.noAccount;
  const switchBtn = document.getElementById('switch-btn');
  if (switchBtn) {
    switchBtn.textContent = state.isSignup ? i18n.loginLink : i18n.registerLink;
    switchBtn.onclick = () => switchTab(state.isSignup ? 'login' : 'signup');
  }
}

function togglePassword() {
  const inp = document.getElementById('login-password');
  if (!inp) return;
  const visible = inp.type === 'text';
  inp.type = visible ? 'password' : 'text';
  const eyeIcon = document.getElementById('eye-icon');
  if (eyeIcon) {
    eyeIcon.innerHTML = visible
      ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
      : '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
  }
}

async function handleLogin() {
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  if (!email || !password) { showToast(i18n.toastFillEmail); return; }
  try {
    const cred = await window.fbSignIn(window.auth, email, password);
    const userDoc = await window.fbGetDoc(window.fbDoc(window.db, 'users', cred.user.uid));
    const userData = userDoc.data();
    state.user = {
      uid: cred.user.uid, name: userData.name, email: cred.user.email,
      phone: userData.phone || '', photoURL: userData.photoURL || '',
      trips: (userData.trips || 0) + fictionalHistory.length
    };
    state.tripsHistory = userData.tripsHistory ? [...userData.tripsHistory, ...fictionalHistory] : [...fictionalHistory];
    document.getElementById('greeting-name').textContent = userData.name.split(' ')[0];
    loadUserPhoto();
    renderSavedPlaces();
    navigate('home');
  } catch (err) { showToast('Erro ao entrar: ' + err.message); }
}

async function handleSignup() {
  const name = document.getElementById('login-name').value.trim();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  if (!name || !email || !password) { showToast(i18n.toastFillAll); return; }
  try {
    const cred = await window.fbCreateUser(window.auth, email, password);
    await window.fbSetDoc(window.fbDoc(window.db, 'users', cred.user.uid), {
      name, email, phone: '', photoURL: '', trips: fictionalHistory.length,
      tripsHistory: [], createdAt: new Date()
    });
    state.user = { uid: cred.user.uid, name, email, phone: '', photoURL: '', trips: fictionalHistory.length };
    state.tripsHistory = [...fictionalHistory];
    document.getElementById('greeting-name').textContent = name.split(' ')[0];
    renderSavedPlaces();
    navigate('home');
  } catch (err) { showToast('Erro ao cadastrar: ' + err.message); }
}

async function handleLogout() {
  await window.fbSignOut(window.auth);
  state.user = null; state.tripsHistory = [];
  navigate('login');
}

// ═══════════════════════════════════════
// EDIT PROFILE MODAL
// ═══════════════════════════════════════
function openEditProfileModal() {
  document.getElementById('edit-name').value = state.user ? state.user.name : '';
  document.getElementById('edit-phone').value = state.user ? (state.user.phone || '') : '';
  document.getElementById('edit-profile-modal').classList.add('open');
}
function closeEditProfileModal() { document.getElementById('edit-profile-modal').classList.remove('open'); }
async function saveEditProfile() {
  const name = document.getElementById('edit-name').value.trim();
  const phone = document.getElementById('edit-phone').value.trim();
  if (!name) { showToast(i18n.toastNameEmpty); return; }
  try {
    const uid = window.auth.currentUser.uid;
    await window.fbUpdateDoc(window.fbDoc(window.db, 'users', uid), { name, phone });
    state.user.name = name; state.user.phone = phone;
    document.getElementById('profile-name').textContent = name;
    document.getElementById('greeting-name').textContent = name.split(' ')[0];
    if (phone) document.getElementById('stat-phone').textContent = phone;
    closeEditProfileModal();
    showToast(i18n.toastProfileUpdated);
  } catch (err) { showToast('Erro: ' + err.message); }
}

// ═══════════════════════════════════════
// SECURITY MODAL
// ═══════════════════════════════════════
function openSecurityModal() {
  ['current-password','new-password','confirm-password'].forEach(id => { document.getElementById(id).value = ''; });
  document.getElementById('security-modal').classList.add('open');
}
function closeSecurityModal() { document.getElementById('security-modal').classList.remove('open'); }
async function saveNewPassword() {
  const currentPwd = document.getElementById('current-password').value;
  const newPwd = document.getElementById('new-password').value;
  const confirmPwd = document.getElementById('confirm-password').value;
  if (!currentPwd || !newPwd || !confirmPwd) { showToast(i18n.toastFillAll); return; }
  if (newPwd !== confirmPwd) { showToast(i18n.toastPasswordsDiff); return; }
  if (newPwd.length < 6) { showToast(i18n.toastPassShort); return; }
  try {
    const user = window.auth.currentUser;
    const credential = window.fbEmailAuthProvider.credential(user.email, currentPwd);
    await window.fbReauth(user, credential);
    await window.fbUpdatePassword(user, newPwd);
    closeSecurityModal();
    showToast(i18n.toastPassUpdated);
  } catch (err) {
    if (err.code === 'auth/wrong-password') showToast('Senha atual incorreta.');
    else showToast('Erro: ' + err.message);
  }
}

// ═══════════════════════════════════════
// PAYMENT MODAL
// ═══════════════════════════════════════
function openPaymentModal() {
  const paymentList = document.getElementById('payment-list');
  if (paymentList) {
    paymentList.innerHTML = '<div style="text-align:center;padding:24px 0;color:var(--text-3);font-size:14px;"><div style="font-size:36px;margin-bottom:8px;">💳</div>' + i18n.noPayment + '</div>';
  }
  document.getElementById('payment-modal').classList.add('open');
}
function closePaymentModal() { document.getElementById('payment-modal').classList.remove('open'); }

// ═══════════════════════════════════════
// TRIPS MODAL
// ═══════════════════════════════════════
function openTripsModal() {
  const tripsList = document.getElementById('trips-list');
  if (tripsList) {
    const allTrips = [...state.tripsHistory, ...fictionalHistory];
    // Deduplicate by destination+date
    const seen = new Set();
    const unique = allTrips.filter(t => {
      const key = t.destination + t.date;
      if (seen.has(key)) return false;
      seen.add(key); return true;
    });

    if (unique.length > 0) {
      tripsList.innerHTML = unique.map(trip => `
        <div class="trip-history-card">
          <div class="trip-history-icon">${trip.icon || '🚗'}</div>
          <div class="trip-history-info">
            <div class="trip-history-dest">${trip.destination || 'Destino'}</div>
            <div class="trip-history-origin">${i18n.fromLabel}${trip.origin || i18n.myLocation}</div>
            <div class="trip-history-meta">
              <span class="trip-history-date">${trip.date || ''}</span>
              <span class="trip-history-vehicle">${trip.vehicle || ''}</span>
              <span class="trip-history-price">${trip.price || ''}</span>
            </div>
          </div>
        </div>
      `).join('');
    } else {
      tripsList.innerHTML = '<div style="text-align:center;padding:24px 0;color:var(--text-3);font-size:14px;"><div style="font-size:36px;margin-bottom:8px;">🗺️</div>' + i18n.noTrips + '</div>';
    }
  }
  document.getElementById('trips-modal').classList.add('open');
}
function closeTripsModal() { document.getElementById('trips-modal').classList.remove('open'); }

async function addTripToHistory(destination, vehicle, price, origin) {
  if (!state.user) return;
  const newTrip = {
    destination, origin: origin || state.origin || i18n.myLocation,
    vehicle: vehicle.name, price,
    date: new Date().toLocaleString('pt-BR'),
    icon: vehicle.icon || '🚗'
  };
  state.tripsHistory.unshift(newTrip);
  state.user.trips = (state.user.trips || 0) + 1;
  const statTrips = document.getElementById('stat-trips');
  if (statTrips) statTrips.textContent = state.user.trips;
  try {
    const uid = window.auth.currentUser.uid;
    await window.fbUpdateDoc(window.fbDoc(window.db, 'users', uid), { trips: state.user.trips, tripsHistory: state.tripsHistory });
  } catch (err) { console.error('Erro ao salvar histórico:', err); }
}

// ═══════════════════════════════════════
// NOTIFICATIONS MODAL
// ═══════════════════════════════════════
function openNotificationsModal() {
  const prefs = JSON.parse(localStorage.getItem('notifPrefs') || '{"promo":true,"trip":true,"email":false}');
  if (document.getElementById('notif-promo')) document.getElementById('notif-promo').checked = prefs.promo;
  if (document.getElementById('notif-trip')) document.getElementById('notif-trip').checked = prefs.trip;
  if (document.getElementById('notif-email')) document.getElementById('notif-email').checked = prefs.email;
  document.getElementById('notifications-modal').classList.add('open');
}
function closeNotificationsModal() { document.getElementById('notifications-modal').classList.remove('open'); }
function saveNotifSettings() {
  const prefs = {
    promo: document.getElementById('notif-promo')?.checked || false,
    trip: document.getElementById('notif-trip')?.checked || false,
    email: document.getElementById('notif-email')?.checked || false,
  };
  localStorage.setItem('notifPrefs', JSON.stringify(prefs));
  showToast(i18n.toastPrefsSaved);
}

// ═══════════════════════════════════════
// SETTINGS MODAL
// ═══════════════════════════════════════
function openSettingsModal() {
  const toggle = document.getElementById('setting-dark');
  if (toggle) toggle.checked = state.isDark;
  ['pt','en','es'].forEach(l => {
    const btn = document.getElementById('lang-' + l);
    if (btn) btn.classList.toggle('active', l === currentLang);
  });
  document.getElementById('settings-modal').classList.add('open');
}
function closeSettingsModal() { document.getElementById('settings-modal').classList.remove('open'); }

// ═══════════════════════════════════════
// FORGOT PASSWORD MODAL
// ═══════════════════════════════════════
function openForgotModal() {
  const loginEmail = document.getElementById('login-email');
  const forgotEmail = document.getElementById('forgot-email');
  if (forgotEmail && loginEmail) forgotEmail.value = loginEmail.value || '';
  document.getElementById('forgot-modal').classList.add('open');
}
function closeForgotModal() { document.getElementById('forgot-modal').classList.remove('open'); }
async function sendPasswordReset() {
  const email = document.getElementById('forgot-email').value.trim();
  if (!email) { showToast(i18n.toastEmailRequired); return; }
  try {
    await window.fbSendPasswordReset(window.auth, email);
    closeForgotModal();
    showToast(i18n.toastLinkSent + email);
  } catch (err) { showToast('Erro: ' + err.message); }
}

// ═══════════════════════════════════════
// TOAST
// ═══════════════════════════════════════
function showToast(msg) {
  let toast = document.getElementById('zuno-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'zuno-toast';
    toast.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#333;color:#fff;padding:10px 20px;border-radius:20px;font-size:13px;z-index:9999;white-space:nowrap;box-shadow:0 4px 12px rgba(0,0,0,0.4);transition:opacity 0.3s;';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.style.opacity = '0'; }, 2500);
}

// ═══════════════════════════════════════
// SAVED PLACES
// ═══════════════════════════════════════
function renderSavedPlaces() {
  const list = document.getElementById('saved-places-list');
  if (!list) return;
  const sectionLabel = document.querySelector('.section-header span');
  if (sectionLabel) sectionLabel.textContent = i18n.savedPlaces;
  const addBtn = document.querySelector('.add-place-btn');
  if (addBtn) addBtn.textContent = i18n.addPlace;
  const greetingPara = document.querySelectorAll('#screen-home .greeting');
  if (greetingPara[1]) {
    const smallEl = greetingPara[1];
    smallEl.textContent = i18n.greeting;
  }

  if (state.savedPlaces.length === 0) {
    list.innerHTML = '<div style="text-align:center;padding:40px 20px;color:var(--text-3);"><div style="font-size:36px;margin-bottom:12px;">📍</div><div>Nenhum lugar salvo</div></div>';
    return;
  }
  list.innerHTML = state.savedPlaces.map((p) =>
    '<button class="place-card" onclick="navigate(\'search\', null); prefillSearch(\'' + p.address.replace(/'/g, "\\'") + '\')">' +
    '<div class="place-icon">' + p.icon + '</div>' +
    '<div class="place-info"><div class="place-name">' + p.label + '</div><div class="place-addr">' + p.address + '</div></div>' +
    '<svg class="place-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>' +
    '</button>'
  ).join('');
}

// ═══════════════════════════════════════
// ADD PLACE MODAL
// ═══════════════════════════════════════
function openModal() {
  state.selectedEmoji = '📍';
  document.getElementById('place-label').value = '';
  document.getElementById('place-address').value = '';
  renderEmojiGrid();
  document.getElementById('add-place-modal').classList.add('open');
}
function closeModal() { document.getElementById('add-place-modal').classList.remove('open'); }
function handleOverlayClick(e) { if (e.target === document.getElementById('add-place-modal')) closeModal(); }
function renderEmojiGrid() {
  const grid = document.getElementById('emoji-grid');
  if (!grid) return;
  grid.innerHTML = emojis.map(e => '<button class="emoji-btn ' + (e === state.selectedEmoji ? 'selected' : '') + '" onclick="selectEmoji(\'' + e + '\')">' + e + '</button>').join('');
}
function selectEmoji(e) { state.selectedEmoji = e; renderEmojiGrid(); }
function savePlace() {
  const label = document.getElementById('place-label').value.trim();
  const address = document.getElementById('place-address').value.trim();
  if (!label || !address) { showToast(i18n.toastFillNameAddr); return; }
  state.savedPlaces.push({ icon: state.selectedEmoji, label, address });
  renderSavedPlaces();
  closeModal();
  showToast(i18n.toastPlaceAdded);
}

// ═══════════════════════════════════════
// SEARCH
// ═══════════════════════════════════════
function onSearchInput(val) {
  const clearBtn = document.getElementById('clear-btn');
  const confirmBtn = document.getElementById('search-confirm-btn');
  if (clearBtn) clearBtn.style.display = val ? 'flex' : 'none';
  if (confirmBtn) confirmBtn.style.display = val.trim() ? 'block' : 'none';
  renderSearch(val);
}

function clearSearch() {
  const sf = document.getElementById('search-field');
  if (sf) { sf.value = ''; onSearchInput(''); sf.focus(); }
}

function confirmSearch() {
  const q = document.getElementById('search-field').value.trim();
  if (!q) { showToast(i18n.toastEnterDest); return; }
  state.origin = document.getElementById('origin-field')?.value || '';
  navigate('trip', q);
}

function prefillSearch(addr) {
  navigate('search');
  setTimeout(() => {
    const sf = document.getElementById('search-field');
    if (sf) { sf.value = addr; onSearchInput(addr); }
  }, 60);
}

function renderSearch(query) {
  const container = document.getElementById('search-content');
  if (!container) return;
  const q = query.toLowerCase().trim();

  const historySection = fictionalHistory.slice(0, 4).map(t =>
    '<button class="history-item" onclick="selectDest(\'' + t.destination.replace(/'/g, "\\'") + '\')">' +
    '<div class="history-icon">' + (t.icon || '🕓') + '</div>' +
    '<div class="dest-info"><div class="dest-name">' + t.destination + '</div><div class="dest-addr">' + t.origin + '</div></div>' +
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>' +
    '</button>'
  ).join('');

  if (q) {
    const filtered = popularDests.filter(d => d.name.toLowerCase().includes(q) || d.address.toLowerCase().includes(q));
    if (filtered.length) {
      container.innerHTML = '<div class="search-section"><div class="search-section-label">' + i18n.popularDests + '</div>' + filtered.map(d => destItem(d, 'yellow')).join('') + '</div>';
    } else {
      container.innerHTML = '<div style="padding:40px 20px;text-align:center;color:var(--text-3)"><div style="font-size:36px;margin-bottom:12px">🔍</div><div style="font-size:15px;color:var(--text-2);margin-bottom:4px">' + i18n.noResults + '</div><div style="font-size:12px">' + i18n.noResultsSub + '</div></div>';
    }
  } else {
    container.innerHTML =
      '<div class="search-section"><div class="search-section-label">' + i18n.recentHistory + '</div>' + historySection + '</div>' +
      '<div class="search-section" style="margin-top:8px;border-top:1px solid var(--border);padding-top:16px"><div class="search-section-label">' + i18n.popularDests + '</div>' + popularDests.map(d => destItem(d, 'yellow')).join('') + '</div>';
  }
}

function destItem(d, iconClass) {
  const pinSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';
  const arrowSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-3)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';
  return '<button class="dest-item" onclick="selectDest(\'' + d.address.replace(/'/g, "\\'") + '\')">' +
    '<div class="dest-icon ' + iconClass + '">' + pinSvg + '</div>' +
    '<div class="dest-info"><div class="dest-name">' + d.name + '</div><div class="dest-addr">' + d.address + '</div></div>' +
    arrowSvg + '</button>';
}

function selectDest(addr) {
  state.origin = document.getElementById('origin-field')?.value || '';
  navigate('trip', addr);
}

// ═══════════════════════════════════════
// TRIP
// ═══════════════════════════════════════
function renderTrip() {
  const destPill = document.getElementById('map-dest-pill');
  if (destPill) destPill.textContent = state.destination || 'Endereço';
  setTxt('trip-origin-text', state.origin || i18n.myLocation);
  setTxt('trip-dest-text', state.destination || 'Endereço');
  setTxt('trip-origin-label', i18n.tripOriginLabel);
  setTxt('trip-dest-label', i18n.tripDestLabel);
  setTxt('trip-title', i18n.chooseTransport);
  renderVehicleList();
  state.confirming = false;
  const btn = document.getElementById('confirm-btn');
  if (btn) btn.disabled = false;
  setTxt('confirm-btn-text', i18n.confirmTrip);
  const note = document.getElementById('confirm-note');
  if (note) note.style.display = 'none';
  const tripScroll = document.getElementById('trip-scroll');
  if (tripScroll) tripScroll.scrollTop = 0;
}

function renderVehicleList() {
  const vehicleList = document.getElementById('vehicle-list');
  if (!vehicleList) return;
  vehicleList.innerHTML = vehicles.map(v =>
    '<button class="vehicle-card ' + (v.id === state.selectedVehicle ? 'selected' : '') + '" onclick="selectVehicle(\'' + v.id + '\')">' +
    '<div class="vehicle-emoji">' + v.icon + '</div>' +
    '<div class="vehicle-info"><div class="vehicle-name-row"><span class="vehicle-name">' + v.name + '</span><span class="vehicle-eta">' + v.eta + '</span></div>' +
    '<div class="vehicle-desc">' + v.desc + '</div><div class="vehicle-cap">' + v.cap + '</div></div>' +
    '<div class="vehicle-price">' + v.price + '</div></button>'
  ).join('');
}

function selectVehicle(id) { state.selectedVehicle = id; renderVehicleList(); }

async function confirmTrip() {
  if (state.confirming) return;
  state.confirming = true;
  const btn = document.getElementById('confirm-btn');
  if (btn) btn.disabled = true;
  const btnText = document.getElementById('confirm-btn-text');
  if (btnText) btnText.innerHTML = '<div class="spinner"></div> Procurando...';
  const note = document.getElementById('confirm-note');
  if (note) { note.style.display = 'block'; note.textContent = i18n.lookingDriver; }

  setTimeout(async () => {
    const selectedVehicle = vehicles.find(v => v.id === state.selectedVehicle);
    await addTripToHistory(state.destination, selectedVehicle, selectedVehicle.price, state.origin);
    if (btnText) btnText.textContent = i18n.tripConfirmed;
    showToast(i18n.driverWay);
    setTimeout(() => { navigate('home'); state.confirming = false; }, 2000);
  }, 2000);
}

// ═══════════════════════════════════════
// PWA
// ═══════════════════════════════════════
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); deferredPrompt = e;
  const banner = document.getElementById('pwa-install-banner');
  if (banner) banner.classList.add('show');
});
document.getElementById('install-btn')?.addEventListener('click', async () => {
  if (deferredPrompt) { deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; dismissInstall(); }
});
function dismissInstall() { document.getElementById('pwa-install-banner')?.classList.remove('show'); }
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => { navigator.serviceWorker.register('sw.js').catch(() => {}); });
}

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
initTheme();
renderEmojiGrid();
applyTranslations();
state.tripsHistory = [...fictionalHistory];

document.querySelectorAll('.zuno-logo img').forEach(img => {
  img.style.cssText += 'object-fit:cover; object-position: right center; width: auto;';
});

loadUserPhoto();
