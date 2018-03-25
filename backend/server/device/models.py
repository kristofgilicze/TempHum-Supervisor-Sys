from server import db


class StationModel(db.Model):
    __tablename__ = 'stations'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    state = db.Column(db.String(10), nullable=False)
    last_temp = db.Column(db.Integer, nullable=False)
    last_hum = db.Column(db.Integer, nullable=False)
    last_data_date = db.Column(db.String(20), nullable=False)
    min_temp = db.Column(db.Integer, nullable=False)
    max_temp = db.Column(db.Integer, nullable=False)

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_name(cls, name):
        return cls.query.filter_by(name=name).first()

    @classmethod
    def return_all(cls):
        def to_json(x):
            return {
                'station_name': x.name,
                'state': x.state,
                'last_temp': x.last_temp,
                'last_hum': x.last_hum,
                'last_data_date': x.last_data_date,
                'min_temp': x.min_temp,
                'max_temp': x.max_temp
            }

        return {'stations': list(map(lambda x: to_json(x), StationModel.query.all()))}

    @classmethod
    def delete_all(cls):
        try:
            num_rows_deleted = db.session.query(cls).delete()
            db.session.commit()
            return {'message': '{} row(s) deleted'.format(num_rows_deleted)}
        except:
            return {'message': 'Something went wrong'}