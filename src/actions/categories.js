export const RECIVE_CATEGORIES = 'RECIVE_CATEGORIES'

export function reciveCategories(categories) {
    return {
        type: RECIVE_CATEGORIES,
        categories
    }
    
}
