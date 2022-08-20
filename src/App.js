import './App.css';
import {useState} from "react";

function App() {
    const [disButton, setDisButton] = useState(true)
    const [disTowns, setDisTowns] = useState(false)
    const [townsList, setTownsList] = useState([])
    const [result, setResult] = useState(null)
    const [destinations, setDestinations] = useState(["Витебск", "Могилев", "Гомель", "Брест", "Гродно", "Лепель", "Ганцевичи", "Столин"])
    const allDestinations = ["Витебск", "Могилев", "Гомель", "Брест", "Гродно", "Лепель", "Ганцевичи", "Столин"]
    const [destinationsOfTask, setDestinationOfTask] = useState([])
    let distanceBetweenTowns = [
        [0, 291, 198, 313, 344, 281, 156, 188, 365],
        [291, 0, 162, 331, 627, 536, 114, 475, 648],
        [198, 162, 0, 175, 530, 481, 189, 355, 398],
        [313, 331, 175, 0, 529, 595, 403, 367, 336],
        [344, 627, 530, 529, 0, 239, 509, 251, 236],
        [281, 536, 481, 595, 239, 0, 424, 265, 324],
        [156, 114, 189, 403, 509, 424, 0, 353, 491],
        [188, 475, 355, 367, 251, 265, 353, 0, 156],
        [365, 648, 398, 336, 236, 324, 491, 156, 0],
    ]

    function start() {
        setDisButton(true)
        setDisTowns(true)
        let arr = []
        next: for (let i = 0; i < townsList.length; i++) {
            for (let j = 0; j < allDestinations.length; j++) {
                if (townsList[i] === allDestinations[j]) {
                    arr[i] = j + 1
                    continue next
                }
            }
        }
        arr.sort()
        distanceBetweenTowns = distanceBetweenTowns.filter(function (el, index) {
            let bool = false
            if (index === 0) bool = true
            for (let i = 0; i < arr.length; i++) {
                if (index === arr[i]) {
                    bool = true
                    break
                }
            }
            return bool
        })
        for (let i = 0; i < distanceBetweenTowns.length; i++) {
            distanceBetweenTowns[i] = distanceBetweenTowns[i].filter(function (el, index) {
                let bool = false
                if (index === 0) bool = true
                for (let i = 0; i < arr.length; i++) {
                    if (index === arr[i]) {
                        bool = true
                        break
                    }
                }
                return bool
            })
        }
        // массив, где будут храниться все просчитанные маршруты
        let path = [];
        let pathBack = [];
        // порядковый номер текущего маршрута
        let counter = 0;
        // самый короткий путь — сразу ставим заведомо большим, чтобы уменьшать его по мере работы алгоритма
        let minPath = 100000;
        let minPath2 = 100000;
        // номер самого короткого маршрута
        let minCounter;
        let minCounter2;
        // let minCounterElse;
        // перебираем все варианты перемещения по городам
        let i1 = 0
        let k1 = "Минск", k2, k3, k4, k5, k6, k7, k8, k9

        if (distanceBetweenTowns.length === 4) start4(4)
        if (distanceBetweenTowns.length === 5) start5(5)
        if (distanceBetweenTowns.length === 6) start6(6)
        if (distanceBetweenTowns.length === 7) start7(7)
        if (distanceBetweenTowns.length === 8) start8(8)
        if (distanceBetweenTowns.length === 9) start9(9)

        function start4(count) {
            for (let i2 = 0; i2 < count; i2++) {
                for (let i3 = 0; i3 < count; i3++) {
                    for (let i4 = 0; i4 < count; i4++) {
                        if ((i1 !== i2) && (i1 !== i3) && (i1 !== i4) && (i2 !== i3) && (i2 !== i4) && (i3 !== i4)) {
                            switch (i2) {
                                case 1:
                                    k2 = destinationsOfTask[0]
                                    break
                                case 2:
                                    k2 = destinationsOfTask[1]
                                    break
                                case 3:
                                    k2 = destinationsOfTask[2]
                                    break
                                default:
                                    break
                            }
                            switch (i3) {
                                case 1:
                                    k3 = destinationsOfTask[0]
                                    break
                                case 2:
                                    k3 = destinationsOfTask[1]
                                    break
                                case 3:
                                    k3 = destinationsOfTask[2]
                                    break
                                default:
                                    break
                            }
                            switch (i4) {
                                case 1:
                                    k4 = destinationsOfTask[0]
                                    break
                                case 2:
                                    k4 = destinationsOfTask[1]
                                    break
                                case 3:
                                    k4 = destinationsOfTask[2]
                                    break
                                default:
                                    break
                            }
                            path[counter] = k1 + ' → ' + k2 + ' → ' + k3 + ' → ' + k4 + ' → ' + k1;
                            pathBack[counter] = k1 + ' → ' + k4 + ' → ' + k3 + ' → ' + k2 + ' → ' + k1;
                            if ((distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i1]) < minPath) {
                                minPath = distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i1];
                                minCounter = counter;
                            }
                            // if ((distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i1]) === minPath) {
                            //     minCounterElse = counter;
                            // }
                            if ((distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i1]) > minPath && (distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i1]) < minPath2) {
                                minPath2 = distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i1];
                                minCounter2 = counter;
                            }
                            counter += 1;
                        }
                    }
                }
            }
        }
        function start5(count) {
            for (let i2 = 0; i2 < count; i2++) {
                for (let i3 = 0; i3 < count; i3++) {
                    for (let i4 = 0; i4 < count; i4++) {
                        for (let i5 = 0; i5 < count; i5++) {
                            if ((i1 !== i2) && (i1 !== i3) && (i1 !== i4) && (i1 !== i5) && (i2 !== i3) && (i2 !== i4) && (i2 !== i5) && (i3 !== i4) && (i3 !== i5) && (i4 !== i5)) {
                                switch (i2) {
                                    case 1:
                                        k2 = destinationsOfTask[0]
                                        break
                                    case 2:
                                        k2 = destinationsOfTask[1]
                                        break
                                    case 3:
                                        k2 = destinationsOfTask[2]
                                        break
                                    case 4:
                                        k2 = destinationsOfTask[3]
                                        break
                                    default:
                                        break
                                }
                                switch (i3) {
                                    case 1:
                                        k3 = destinationsOfTask[0]
                                        break
                                    case 2:
                                        k3 = destinationsOfTask[1]
                                        break
                                    case 3:
                                        k3 = destinationsOfTask[2]
                                        break
                                    case 4:
                                        k3 = destinationsOfTask[3]
                                        break
                                    default:
                                        break
                                }
                                switch (i4) {
                                    case 1:
                                        k4 = destinationsOfTask[0]
                                        break
                                    case 2:
                                        k4 = destinationsOfTask[1]
                                        break
                                    case 3:
                                        k4 = destinationsOfTask[2]
                                        break
                                    case 4:
                                        k4 = destinationsOfTask[3]
                                        break
                                    default:
                                        break
                                }
                                switch (i5) {
                                    case 1:
                                        k5 = destinationsOfTask[0]
                                        break
                                    case 2:
                                        k5 = destinationsOfTask[1]
                                        break
                                    case 3:
                                        k5 = destinationsOfTask[2]
                                        break
                                    case 4:
                                        k5 = destinationsOfTask[3]
                                        break
                                    default:
                                        break
                                }
                                path[counter] = k1 + ' → ' + k2 + ' → ' + k3 + ' → ' + k4 + ' → ' + k5 + ' → ' + k1;
                                pathBack[counter] = k1 + ' → ' + k5 + ' → ' + k4 + ' → ' + k3 + ' → ' + k2 + ' → ' + k1;
                                if ((distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i1]) < minPath) {
                                    minPath = distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i1];
                                    minCounter = counter;
                                }
                                if ((distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i1]) > minPath && (distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i1]) < minPath2) {
                                    minPath2 = distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i1];
                                    minCounter2 = counter;
                                }
                                counter += 1;
                            }
                        }
                    }
                }
            }
        }
        function start6(count) {
            for (let i2 = 0; i2 < count; i2++) {
                for (let i3 = 0; i3 < count; i3++) {
                    for (let i4 = 0; i4 < count; i4++) {
                        for (let i5 = 0; i5 < count; i5++) {
                            for (let i6 = 0; i6 < count; i6++) {
                                if ((i1 !== i2) && (i1 !== i3) && (i1 !== i4) && (i1 !== i5) && (i1 !== i6) && (i2 !== i3) && (i2 !== i4) && (i2 !== i5) && (i2 !== i6) && (i3 !== i4) && (i3 !== i5) && (i3 !== i6) && (i4 !== i5) && (i4 !== i6) && (i5 !== i6)) {
                                    switch (i2) {
                                        case 1:
                                            k2 = destinationsOfTask[0]
                                            break
                                        case 2:
                                            k2 = destinationsOfTask[1]
                                            break
                                        case 3:
                                            k2 = destinationsOfTask[2]
                                            break
                                        case 4:
                                            k2 = destinationsOfTask[3]
                                            break
                                        case 5:
                                            k2 = destinationsOfTask[4]
                                            break
                                        default:
                                            break
                                    }
                                    switch (i3) {
                                        case 1:
                                            k3 = destinationsOfTask[0]
                                            break
                                        case 2:
                                            k3 = destinationsOfTask[1]
                                            break
                                        case 3:
                                            k3 = destinationsOfTask[2]
                                            break
                                        case 4:
                                            k3 = destinationsOfTask[3]
                                            break
                                        case 5:
                                            k3 = destinationsOfTask[4]
                                            break
                                        default:
                                            break
                                    }
                                    switch (i4) {
                                        case 1:
                                            k4 = destinationsOfTask[0]
                                            break
                                        case 2:
                                            k4 = destinationsOfTask[1]
                                            break
                                        case 3:
                                            k4 = destinationsOfTask[2]
                                            break
                                        case 4:
                                            k4 = destinationsOfTask[3]
                                            break
                                        case 5:
                                            k4 = destinationsOfTask[4]
                                            break
                                        default:
                                            break
                                    }
                                    switch (i5) {
                                        case 1:
                                            k5 = destinationsOfTask[0]
                                            break
                                        case 2:
                                            k5 = destinationsOfTask[1]
                                            break
                                        case 3:
                                            k5 = destinationsOfTask[2]
                                            break
                                        case 4:
                                            k5 = destinationsOfTask[3]
                                            break
                                        case 5:
                                            k5 = destinationsOfTask[4]
                                            break
                                        default:
                                            break
                                    }
                                    switch (i6) {
                                        case 1:
                                            k6 = destinationsOfTask[0]
                                            break
                                        case 2:
                                            k6 = destinationsOfTask[1]
                                            break
                                        case 3:
                                            k6 = destinationsOfTask[2]
                                            break
                                        case 4:
                                            k6 = destinationsOfTask[3]
                                            break
                                        case 5:
                                            k6 = destinationsOfTask[4]
                                            break
                                        default:
                                            break
                                    }
                                    path[counter] = k1 + ' → ' + k2 + ' → ' + k3 + ' → ' + k4 + ' → ' + k5 + ' → ' + k6 + ' → ' + k1;
                                    pathBack[counter] = k1 + ' → ' + k6 + ' → ' + k5 + ' → ' + k4 + ' → ' + k3 + ' → ' + k2 + ' → ' + k1;
                                    if ((distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i1]) < minPath) {
                                        minPath = distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i1];
                                        minCounter = counter;
                                    }
                                    if ((distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i1]) > minPath && (distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i1]) < minPath2) {
                                        minPath2 = distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i1];
                                        minCounter2 = counter;
                                    }
                                    counter += 1;
                                }
                            }
                        }
                    }
                }
            }
        }
        function start7(count) {
            for (let i2 = 0; i2 < count; i2++) {
                for (let i3 = 0; i3 < count; i3++) {
                    for (let i4 = 0; i4 < count; i4++) {
                        for (let i5 = 0; i5 < count; i5++) {
                            for (let i6 = 0; i6 < count; i6++) {
                                for (let i7 = 0; i7 < count; i7++) {
                                    if ((i1 !== i2) && (i1 !== i3) && (i1 !== i4) && (i1 !== i5) && (i1 !== i6) && (i1 !== i7) && (i2 !== i3) && (i2 !== i4) && (i2 !== i5) && (i2 !== i6) && (i2 !== i7) && (i3 !== i4) && (i3 !== i5) && (i3 !== i6) && (i3 !== i7) && (i4 !== i5) && (i4 !== i6) && (i4 !== i7) && (i5 !== i6) && (i5 !== i7) && (i6 !== i7)) {
                                        switch (i2) {
                                            case 1:
                                                k2 = destinationsOfTask[0]
                                                break
                                            case 2:
                                                k2 = destinationsOfTask[1]
                                                break
                                            case 3:
                                                k2 = destinationsOfTask[2]
                                                break
                                            case 4:
                                                k2 = destinationsOfTask[3]
                                                break
                                            case 5:
                                                k2 = destinationsOfTask[4]
                                                break
                                            case 6:
                                                k2 = destinationsOfTask[5]
                                                break
                                            default:
                                                break
                                        }
                                        switch (i3) {
                                            case 1:
                                                k3 = destinationsOfTask[0]
                                                break
                                            case 2:
                                                k3 = destinationsOfTask[1]
                                                break
                                            case 3:
                                                k3 = destinationsOfTask[2]
                                                break
                                            case 4:
                                                k3 = destinationsOfTask[3]
                                                break
                                            case 5:
                                                k3 = destinationsOfTask[4]
                                                break
                                            case 6:
                                                k3 = destinationsOfTask[5]
                                                break
                                            default:
                                                break
                                        }
                                        switch (i4) {
                                            case 1:
                                                k4 = destinationsOfTask[0]
                                                break
                                            case 2:
                                                k4 = destinationsOfTask[1]
                                                break
                                            case 3:
                                                k4 = destinationsOfTask[2]
                                                break
                                            case 4:
                                                k4 = destinationsOfTask[3]
                                                break
                                            case 5:
                                                k4 = destinationsOfTask[4]
                                                break
                                            case 6:
                                                k4 = destinationsOfTask[5]
                                                break
                                            default:
                                                break
                                        }
                                        switch (i5) {
                                            case 1:
                                                k5 = destinationsOfTask[0]
                                                break
                                            case 2:
                                                k5 = destinationsOfTask[1]
                                                break
                                            case 3:
                                                k5 = destinationsOfTask[2]
                                                break
                                            case 4:
                                                k5 = destinationsOfTask[3]
                                                break
                                            case 5:
                                                k5 = destinationsOfTask[4]
                                                break
                                            case 6:
                                                k5 = destinationsOfTask[5]
                                                break
                                            default:
                                                break
                                        }
                                        switch (i6) {
                                            case 1:
                                                k6 = destinationsOfTask[0]
                                                break
                                            case 2:
                                                k6 = destinationsOfTask[1]
                                                break
                                            case 3:
                                                k6 = destinationsOfTask[2]
                                                break
                                            case 4:
                                                k6 = destinationsOfTask[3]
                                                break
                                            case 5:
                                                k6 = destinationsOfTask[4]
                                                break
                                            case 6:
                                                k6 = destinationsOfTask[5]
                                                break
                                            default:
                                                break
                                        }
                                        switch (i7) {
                                            case 1:
                                                k7 = destinationsOfTask[0]
                                                break
                                            case 2:
                                                k7 = destinationsOfTask[1]
                                                break
                                            case 3:
                                                k7 = destinationsOfTask[2]
                                                break
                                            case 4:
                                                k7 = destinationsOfTask[3]
                                                break
                                            case 5:
                                                k7 = destinationsOfTask[4]
                                                break
                                            case 6:
                                                k7 = destinationsOfTask[5]
                                                break
                                            default:
                                                break
                                        }
                                        path[counter] = k1 + ' → ' + k2 + ' → ' + k3 + ' → ' + k4 + ' → ' + k5 + ' → ' + k6 + ' → ' + k7 + ' → ' + k1;
                                        pathBack[counter] = k1 + ' → ' + k7 + ' → ' + k6 + ' → ' + k5 + ' → ' + k4 + ' → ' + k3 + ' → ' + k2 + ' → ' + k1;
                                        if ((distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i7] + distanceBetweenTowns[i7][i1]) < minPath) {
                                            minPath = distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i7] + distanceBetweenTowns[i7][i1];
                                            minCounter = counter;
                                        }
                                        if ((distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i7] + distanceBetweenTowns[i7][i1]) > minPath && (distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i7] + distanceBetweenTowns[i7][i1]) < minPath2) {
                                            minPath2 = distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i7] + distanceBetweenTowns[i7][i1];
                                            minCounter2 = counter;
                                        }
                                        counter += 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        function start8(count) {
            for (let i2 = 0; i2 < count; i2++) {
                for (let i3 = 0; i3 < count; i3++) {
                    for (let i4 = 0; i4 < count; i4++) {
                        for (let i5 = 0; i5 < count; i5++) {
                            for (let i6 = 0; i6 < count; i6++) {
                                for (let i7 = 0; i7 < count; i7++) {
                                    for (let i8 = 0; i8 < count; i8++) {
                                        if ((i1 !== i2) && (i1 !== i3) && (i1 !== i4) && (i1 !== i5) && (i1 !== i6) && (i1 !== i7) && (i1 !== i8) && (i2 !== i3) && (i2 !== i4) && (i2 !== i5) && (i2 !== i6) && (i2 !== i7) && (i2 !== i8) && (i3 !== i4) && (i3 !== i5) && (i3 !== i6) && (i3 !== i7) && (i3 !== i8) && (i4 !== i5) && (i4 !== i6) && (i4 !== i7) && (i4 !== i8) && (i5 !== i6) && (i5 !== i7) && (i5 !== i8) && (i6 !== i7) && (i6 !== i8) && (i7 !== i8)) {
                                            switch (i2) {
                                                case 1:
                                                    k2 = destinationsOfTask[0]
                                                    break
                                                case 2:
                                                    k2 = destinationsOfTask[1]
                                                    break
                                                case 3:
                                                    k2 = destinationsOfTask[2]
                                                    break
                                                case 4:
                                                    k2 = destinationsOfTask[3]
                                                    break
                                                case 5:
                                                    k2 = destinationsOfTask[4]
                                                    break
                                                case 6:
                                                    k2 = destinationsOfTask[5]
                                                    break
                                                case 7:
                                                    k2 = destinationsOfTask[6]
                                                    break
                                                default:
                                                    break
                                            }
                                            switch (i3) {
                                                case 1:
                                                    k3 = destinationsOfTask[0]
                                                    break
                                                case 2:
                                                    k3 = destinationsOfTask[1]
                                                    break
                                                case 3:
                                                    k3 = destinationsOfTask[2]
                                                    break
                                                case 4:
                                                    k3 = destinationsOfTask[3]
                                                    break
                                                case 5:
                                                    k3 = destinationsOfTask[4]
                                                    break
                                                case 6:
                                                    k3 = destinationsOfTask[5]
                                                    break
                                                case 7:
                                                    k3 = destinationsOfTask[6]
                                                    break
                                                default:
                                                    break
                                            }
                                            switch (i4) {
                                                case 1:
                                                    k4 = destinationsOfTask[0]
                                                    break
                                                case 2:
                                                    k4 = destinationsOfTask[1]
                                                    break
                                                case 3:
                                                    k4 = destinationsOfTask[2]
                                                    break
                                                case 4:
                                                    k4 = destinationsOfTask[3]
                                                    break
                                                case 5:
                                                    k4 = destinationsOfTask[4]
                                                    break
                                                case 6:
                                                    k4 = destinationsOfTask[5]
                                                    break
                                                case 7:
                                                    k4 = destinationsOfTask[6]
                                                    break
                                                default:
                                                    break
                                            }
                                            switch (i5) {
                                                case 1:
                                                    k5 = destinationsOfTask[0]
                                                    break
                                                case 2:
                                                    k5 = destinationsOfTask[1]
                                                    break
                                                case 3:
                                                    k5 = destinationsOfTask[2]
                                                    break
                                                case 4:
                                                    k5 = destinationsOfTask[3]
                                                    break
                                                case 5:
                                                    k5 = destinationsOfTask[4]
                                                    break
                                                case 6:
                                                    k5 = destinationsOfTask[5]
                                                    break
                                                case 7:
                                                    k5 = destinationsOfTask[6]
                                                    break
                                                default:
                                                    break
                                            }
                                            switch (i6) {
                                                case 1:
                                                    k6 = destinationsOfTask[0]
                                                    break
                                                case 2:
                                                    k6 = destinationsOfTask[1]
                                                    break
                                                case 3:
                                                    k6 = destinationsOfTask[2]
                                                    break
                                                case 4:
                                                    k6 = destinationsOfTask[3]
                                                    break
                                                case 5:
                                                    k6 = destinationsOfTask[4]
                                                    break
                                                case 6:
                                                    k6 = destinationsOfTask[5]
                                                    break
                                                case 7:
                                                    k6 = destinationsOfTask[6]
                                                    break
                                                default:
                                                    break
                                            }
                                            switch (i7) {
                                                case 1:
                                                    k7 = destinationsOfTask[0]
                                                    break
                                                case 2:
                                                    k7 = destinationsOfTask[1]
                                                    break
                                                case 3:
                                                    k7 = destinationsOfTask[2]
                                                    break
                                                case 4:
                                                    k7 = destinationsOfTask[3]
                                                    break
                                                case 5:
                                                    k7 = destinationsOfTask[4]
                                                    break
                                                case 6:
                                                    k7 = destinationsOfTask[5]
                                                    break
                                                case 7:
                                                    k7 = destinationsOfTask[6]
                                                    break
                                                default:
                                                    break
                                            }
                                            switch (i8) {
                                                case 1:
                                                    k8 = destinationsOfTask[0]
                                                    break
                                                case 2:
                                                    k8 = destinationsOfTask[1]
                                                    break
                                                case 3:
                                                    k8 = destinationsOfTask[2]
                                                    break
                                                case 4:
                                                    k8 = destinationsOfTask[3]
                                                    break
                                                case 5:
                                                    k8 = destinationsOfTask[4]
                                                    break
                                                case 6:
                                                    k8 = destinationsOfTask[5]
                                                    break
                                                case 7:
                                                    k8 = destinationsOfTask[6]
                                                    break
                                                default:
                                                    break
                                            }
                                            path[counter] = k1 + ' → ' + k2 + ' → ' + k3 + ' → ' + k4 + ' → ' + k5 + ' → ' + k6 + ' → ' + k7 + ' → ' + k8 + ' → ' + k1;
                                            pathBack[counter] = k1 + ' → ' + k8 + ' → ' + k7 + ' → ' + k6 + ' → ' + k5 + ' → ' + k4 + ' → ' + k3 + ' → ' + k2 + ' → ' + k1;
                                            if ((distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i7] + distanceBetweenTowns[i7][i8] + distanceBetweenTowns[i8][i1]) < minPath) {
                                                minPath = distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i7] + distanceBetweenTowns[i7][i8] + distanceBetweenTowns[i8][i1];
                                                minCounter = counter;
                                            }
                                            if ((distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i7] + distanceBetweenTowns[i7][i8] + distanceBetweenTowns[i8][i1]) > minPath && (distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i7] + distanceBetweenTowns[i7][i8] + distanceBetweenTowns[i8][i1]) < minPath2) {
                                                minPath2 = distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i7] + distanceBetweenTowns[i7][i8] + distanceBetweenTowns[i8][i1];
                                                minCounter2 = counter;
                                            }
                                            counter += 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        function start9(count) {
            for (let i2 = 0; i2 < count; i2++) {
                for (let i3 = 0; i3 < count; i3++) {
                    for (let i4 = 0; i4 < count; i4++) {
                        for (let i5 = 0; i5 < count; i5++) {
                            for (let i6 = 0; i6 < count; i6++) {
                                for (let i7 = 0; i7 < count; i7++) {
                                    for (let i8 = 0; i8 < count; i8++) {
                                        for (let i9 = 0; i9 < count; i9++) {
                                            // нельзя посещать один и тот же город больше одного раза
                                            if ((i1 !== i2) && (i1 !== i3) && (i1 !== i4) && (i1 !== i5) && (i1 !== i6) && (i1 !== i7) && (i1 !== i8) && (i1 !== i9) && (i2 !== i3) && (i2 !== i4) && (i2 !== i5) && (i2 !== i6) && (i2 !== i7) && (i2 !== i8) && (i2 !== i9) && (i3 !== i4) && (i3 !== i5) && (i3 !== i6) && (i3 !== i7) && (i3 !== i8) && (i3 !== i9) && (i4 !== i5) && (i4 !== i6) && (i4 !== i7) && (i4 !== i8) && (i4 !== i9) && (i5 !== i6) && (i5 !== i7) && (i5 !== i8) && (i5 !== i9) && (i6 !== i7) && (i6 !== i8) && (i6 !== i9) && (i7 !== i8) && (i7 !== i9) && (i8 !== i9)) {
                                                // запоминаем текущий путь
                                                switch (i2) {
                                                    case 1:
                                                        k2 = destinationsOfTask[0]
                                                        break
                                                    case 2:
                                                        k2 = destinationsOfTask[1]
                                                        break
                                                    case 3:
                                                        k2 = destinationsOfTask[2]
                                                        break
                                                    case 4:
                                                        k2 = destinationsOfTask[3]
                                                        break
                                                    case 5:
                                                        k2 = destinationsOfTask[4]
                                                        break
                                                    case 6:
                                                        k2 = destinationsOfTask[5]
                                                        break
                                                    case 7:
                                                        k2 = destinationsOfTask[6]
                                                        break
                                                    case 8:
                                                        k2 = destinationsOfTask[7]
                                                        break
                                                    default:
                                                        break
                                                }
                                                switch (i3) {
                                                    case 1:
                                                        k3 = destinationsOfTask[0]
                                                        break
                                                    case 2:
                                                        k3 = destinationsOfTask[1]
                                                        break
                                                    case 3:
                                                        k3 = destinationsOfTask[2]
                                                        break
                                                    case 4:
                                                        k3 = destinationsOfTask[3]
                                                        break
                                                    case 5:
                                                        k3 = destinationsOfTask[4]
                                                        break
                                                    case 6:
                                                        k3 = destinationsOfTask[5]
                                                        break
                                                    case 7:
                                                        k3 = destinationsOfTask[6]
                                                        break
                                                    case 8:
                                                        k3 = destinationsOfTask[7]
                                                        break
                                                    default:
                                                        break
                                                }
                                                switch (i4) {
                                                    case 1:
                                                        k4 = destinationsOfTask[0]
                                                        break
                                                    case 2:
                                                        k4 = destinationsOfTask[1]
                                                        break
                                                    case 3:
                                                        k4 = destinationsOfTask[2]
                                                        break
                                                    case 4:
                                                        k4 = destinationsOfTask[3]
                                                        break
                                                    case 5:
                                                        k4 = destinationsOfTask[4]
                                                        break
                                                    case 6:
                                                        k4 = destinationsOfTask[5]
                                                        break
                                                    case 7:
                                                        k4 = destinationsOfTask[6]
                                                        break
                                                    case 8:
                                                        k4 = destinationsOfTask[7]
                                                        break
                                                    default:
                                                        break
                                                }
                                                switch (i5) {
                                                    case 1:
                                                        k5 = destinationsOfTask[0]
                                                        break
                                                    case 2:
                                                        k5 = destinationsOfTask[1]
                                                        break
                                                    case 3:
                                                        k5 = destinationsOfTask[2]
                                                        break
                                                    case 4:
                                                        k5 = destinationsOfTask[3]
                                                        break
                                                    case 5:
                                                        k5 = destinationsOfTask[4]
                                                        break
                                                    case 6:
                                                        k5 = destinationsOfTask[5]
                                                        break
                                                    case 7:
                                                        k5 = destinationsOfTask[6]
                                                        break
                                                    case 8:
                                                        k5 = destinationsOfTask[7]
                                                        break
                                                    default:
                                                        break
                                                }
                                                switch (i6) {
                                                    case 1:
                                                        k6 = destinationsOfTask[0]
                                                        break
                                                    case 2:
                                                        k6 = destinationsOfTask[1]
                                                        break
                                                    case 3:
                                                        k6 = destinationsOfTask[2]
                                                        break
                                                    case 4:
                                                        k6 = destinationsOfTask[3]
                                                        break
                                                    case 5:
                                                        k6 = destinationsOfTask[4]
                                                        break
                                                    case 6:
                                                        k6 = destinationsOfTask[5]
                                                        break
                                                    case 7:
                                                        k6 = destinationsOfTask[6]
                                                        break
                                                    case 8:
                                                        k6 = destinationsOfTask[7]
                                                        break
                                                    default:
                                                        break
                                                }
                                                switch (i7) {
                                                    case 1:
                                                        k7 = destinationsOfTask[0]
                                                        break
                                                    case 2:
                                                        k7 = destinationsOfTask[1]
                                                        break
                                                    case 3:
                                                        k7 = destinationsOfTask[2]
                                                        break
                                                    case 4:
                                                        k7 = destinationsOfTask[3]
                                                        break
                                                    case 5:
                                                        k7 = destinationsOfTask[4]
                                                        break
                                                    case 6:
                                                        k7 = destinationsOfTask[5]
                                                        break
                                                    case 7:
                                                        k7 = destinationsOfTask[6]
                                                        break
                                                    case 8:
                                                        k7 = destinationsOfTask[7]
                                                        break
                                                    default:
                                                        break
                                                }
                                                switch (i8) {
                                                    case 1:
                                                        k8 = destinationsOfTask[0]
                                                        break
                                                    case 2:
                                                        k8 = destinationsOfTask[1]
                                                        break
                                                    case 3:
                                                        k8 = destinationsOfTask[2]
                                                        break
                                                    case 4:
                                                        k8 = destinationsOfTask[3]
                                                        break
                                                    case 5:
                                                        k8 = destinationsOfTask[4]
                                                        break
                                                    case 6:
                                                        k8 = destinationsOfTask[5]
                                                        break
                                                    case 7:
                                                        k8 = destinationsOfTask[6]
                                                        break
                                                    case 8:
                                                        k8 = destinationsOfTask[7]
                                                        break
                                                    default:
                                                        break
                                                }
                                                switch (i9) {
                                                    case 1:
                                                        k9 = destinationsOfTask[0]
                                                        break
                                                    case 2:
                                                        k9 = destinationsOfTask[1]
                                                        break
                                                    case 3:
                                                        k9 = destinationsOfTask[2]
                                                        break
                                                    case 4:
                                                        k9 = destinationsOfTask[3]
                                                        break
                                                    case 5:
                                                        k9 = destinationsOfTask[4]
                                                        break
                                                    case 6:
                                                        k9 = destinationsOfTask[5]
                                                        break
                                                    case 7:
                                                        k9 = destinationsOfTask[6]
                                                        break
                                                    case 8:
                                                        k9 = destinationsOfTask[7]
                                                        break
                                                    default:
                                                        break
                                                }
                                                // path[counter] = i1 + ' → ' + i2 + ' → ' + i3 + ' → ' + i4 + ' → ' + i5 + ' → ' + i6 + ' → ' + i7 + ' → ' + i8 + ' → ' + i9 + ' → ' + i1;
                                                // pathBack[counter] = i1 + ' → ' + i9 + ' → ' + i8 + ' → ' + i7 + ' → ' + i6 + ' → ' + i5 + ' → ' + i4 + ' → ' + i3 + ' → ' + i2 + ' → ' + i1;
                                                path[counter] = k1 + ' → ' + k2 + ' → ' + k3 + ' → ' + k4 + ' → ' + k5 + ' → ' + k6 + ' → ' + k7 + ' → ' + k8 + ' → ' + k9 + ' → ' + k1;
                                                pathBack[counter] = k1 + ' → ' + k9 + ' → ' + k8 + ' → ' + k7 + ' → ' + k6 + ' → ' + k5 + ' → ' + k4 + ' → ' + k3 + ' → ' + k2 + ' → ' + k1;

                                                // если общее расстоения этого пути меньше минимального
                                                if ((distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i7] + distanceBetweenTowns[i7][i8] + distanceBetweenTowns[i8][i9] + distanceBetweenTowns[i9][i1]) < minPath) {
                                                    // то мы запоминаем это минимальное расстояние
                                                    minPath = distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i7] + distanceBetweenTowns[i7][i8] + distanceBetweenTowns[i8][i9] + distanceBetweenTowns[i9][i1];
                                                    // запоминаем номер этого маршрута с минимальным расстоянием
                                                    minCounter = counter;
                                                }
                                                if ((distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i7] + distanceBetweenTowns[i7][i8] + distanceBetweenTowns[i8][i9] + distanceBetweenTowns[i9][i1]) > minPath && (distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i7] + distanceBetweenTowns[i7][i8] + distanceBetweenTowns[i8][i9] + distanceBetweenTowns[i9][i1]) < minPath2) {
                                                    minPath2 = distanceBetweenTowns[i1][i2] + distanceBetweenTowns[i2][i3] + distanceBetweenTowns[i3][i4] + distanceBetweenTowns[i4][i5] + distanceBetweenTowns[i5][i6] + distanceBetweenTowns[i6][i7] + distanceBetweenTowns[i7][i8] + distanceBetweenTowns[i8][i9] + distanceBetweenTowns[i9][i1];
                                                    minCounter2 = counter;
                                                }
                                                // когда всё сделали, увеличиваем номер маршрута
                                                counter += 1;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        setResult(
            <>
                Путь с самой короткой длиной маршрута: <br/><br/>{path[minCounter]} <br/>({pathBack[minCounter]}) <br/> {minPath} км <br/>
                {/*{minCounterElse !== null ? <> или <br/> {path[minCounterElse]} <br/>{pathBack[minCounterElse]} <br/> {minPath} км</> : null}*/}
                <br/><br/>или немного длиннее:<br/><br/> {path[minCounter2]} <br/>({pathBack[minCounter2]}) <br/> {minPath2} км
            </>
        )
    }

    function addTown(e) {
        let newTownsList = townsList
        newTownsList.push(e.currentTarget.textContent)
        if (newTownsList.length > 2) setDisButton(false)
        setTownsList(newTownsList)
        setDestinations(destinations.filter(el => el !== e.currentTarget.textContent))

        let newDestinations = allDestinations.filter(function (el) {
            let bool = false
            if (el === "Минск") bool = true
            for (let i = 0; i < townsList.length; i++) {
                if (el === townsList[i]) {
                    bool = true
                    break
                }
            }
            return bool
        })
        setDestinationOfTask(newDestinations)
    }

    function delTown(e) {
        let newTownsList = destinations
        newTownsList.push(e.currentTarget.textContent)
        setDestinations(newTownsList)
        setTownsList(townsList.filter(el => el !== e.currentTarget.textContent))
        if (townsList.length < 4) setDisButton(true)
    }

    function reload() {
        window.location.reload()
    }

    return (<div className="App">
        <br/><br/>
        <span>Пункт отправления: МИНСК</span>
        <br/><br/><br/>
        <span>Выберите пункты назначения: </span>
        <br/><br/>
        {destinations.map(el => <button key={el} className="destinations" onClick={addTown} disabled={disTowns}>{el}</button>)}
        <br/><br/>
        <hr/>
        <br/>
        <span>Выбранные пункты назначения: </span>
        <br/><br/>
        {townsList.map(el => <button key={el} className="destinations" onClick={delTown} disabled={disTowns}>{el}</button>)}
        <br/><br/><br/>
        <button onClick={start} className="button" disabled={disButton}>Рассчитать</button>
        <br/><br/>
        {result}
        <button onClick={reload} className="button reload">Новый расчет</button>
    </div>)
}

export default App;