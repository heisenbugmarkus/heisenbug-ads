import { readdirSync } from 'fs';
import { join } from 'path';
import Month from './Month';

type YearProps = {
  companyName: string;
  year: string;
};

const Year = ({ companyName, year }: YearProps) => {
  const directoryPath = join(
    process.cwd(),
    'public',
    'ads/' + companyName + '/' + year
  );
  const files = readdirSync(directoryPath);

  return (
    <div className=''>
      <h2 className='uppercase bg-red-400'>{year}</h2>
      {files &&
        files.map((file: string) => (
          <Month
            key={file}
            month={file}
            companyName={companyName}
            year={year}
          />
        ))}
    </div>
  );
};

export default Year;
