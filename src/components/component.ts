export interface IComponent {
    /** Chamado quando o objeto é construido */
    start: () => void,
    /** Chamado dentro do loop de renderização da engine */
    update: () => void
}