export const convertNumber = (number: string) => {
    if (number.slice(0, 7) == 'DOS-OPP') {
        return number.slice(7, number.length);
    }
    return number;
}

export const convertDuration = (duration?: string | null) => {
    if (duration) {
        if (duration == 'One year or less') return '<1 y';
        if (duration == 'One to three years') return '1-3 y';
        if (duration == 'Three to five years') return '3-5 y';
        if (duration == 'More than five years') return '>5 y';
        if (duration == '1 time purchase') return '1 time';
        if (duration.substring(duration.length - 5) == 'years') {
            return duration.substring(0, duration.indexOf(' ')) + ' y';
        }
    }
    return undefined;
}

export const convertQuarter = (quarter?: number | null) => {
    return quarter ? ('Q' + quarter) : '';
}