// Boshlang'ich holat
export const initialState = {
    user: [] // Foydalanuvchi tomonidan qo'shilgan mahsulotlar ro'yxati
};

// Reducer funksiyasi
const reducer = (state, action) => {
    switch (action.type) {
        case "ADDTOCARD":
            // Yangi mahsulotni foydalanuvchi ro'yxatiga qo'shish
            return {
                ...state,
                user: [...state.user, action.product] // action.product - qo'shiladigan mahsulot
            };

        case "DELETE":
            // Id asosida mahsulotni ro'yxatdan o'chirish
            return {
                ...state,
                user: state.user.filter(product => product.id !== action.id) // action.product.id - o'chiriladigan mahsulot id
            };

        default:
            return state; // Har qanday tanilmagan harakatlar uchun holatni o'zgartirmaslik
    }
};

export default reducer;
