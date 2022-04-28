import paramDAO from '../DAO/paramDAO';

function create() {
    async function query() {
        let result = paramDAO.query();
        if (result) {
            return result;
        }
    }

    async function add(object) {
        let result = paramDAO.add(object);
                if (result) {
                    return result;
                }
    }

    async function get(id) {
            let result = paramDAO.get(id);
                    if (result) {
                        return result;
                    }
        }

    async function getLast() {
            let result = paramDAO.getLast();
                    if (result) {
                         return result;
                    }
            }




    return {
        query: query,
        get: get,
        add: add,
        getLast: getLast

    };
}

export default {
    create: create
};
