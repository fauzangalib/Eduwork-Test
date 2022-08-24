function tahunKabisat(tahun) {
	if (tahun % 4 == 0) {
		if (tahun % 100 == 0) {
			if (tahun % 400 == 0) {
				return 'Tahun ' + tahun + ' adalah tahun kabisat';
			} else {
				return 'Tahun ' + tahun + ' bukan tahun kabisat';
			}
		} else {
			return 'Tahun ' + tahun + ' adalah tahun kabisat';
		}
	} else {
		return 'Tahun ' + tahun + ' bukan tahun kabisat';
	}
}

console.log(tahunKabisat(2021));
console.log(tahunKabisat(2024));