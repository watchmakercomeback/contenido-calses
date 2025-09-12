interface itemLibrary<T> {
    id: number,
    title: string,
    available: boolean,
    detail: T
}

type book = {
    author: string,
    page: number
}

type revist = {
    edition: string,
    theme: string,
}

function loan<T>(item: itemLibrary<T>): itemLibrary<T> | string {
    if (item.available) {
        return { ...item, available: true }
    } else {
        return `The resource ${item.title} is not available`
    }
};

function Available(item: itemLibrary<book | revist>[]): string[]{
    return  items
        .filter(items => item.available)
        .map(items => item.title)
}

enum Categories {
    book = 'libro',
    revist = 'revista'
}

type countingResource = record<Categories, number>

function countResource(items:  (itemLibrary<book> | itemLibrary<revist>)[]): countingResource {
    return items.reduce<coutingResource>((acc, item) => {
        if ("author" in item.detail) {
            acc[Categories.book]++
        } else {
            acc[Categories.revist]++
        }
        return acc
    },
        {[Categories.book]: 0, [Categories.revist]: 0}
        )
}