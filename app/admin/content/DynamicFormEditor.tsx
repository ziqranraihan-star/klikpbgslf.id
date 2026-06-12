import { useState } from 'react';
import { Save, Plus, Trash2, ChevronDown, ChevronRight } from 'lucide-react';

const getInputType = (key: string, value: any) => {
  if (typeof value === 'boolean') return 'checkbox';
  if (typeof value === 'number') return 'number';
  if (typeof value === 'string') {
    if (value.length > 80 || key.toLowerCase().includes('description') || key.toLowerCase().includes('answer')) return 'textarea';
    return 'text';
  }
  return 'text';
};

const FormField = ({ label, value, onChange, onRemove }: any) => {
  const type = getInputType(label, value);
  const [collapsed, setCollapsed] = useState(false);

  if (Array.isArray(value)) {
    return (
      <div className="ml-4 border-l-2 border-slate-200 pl-4 py-2 mt-2">
        <div className="flex items-center justify-between mb-2">
          <label className="font-semibold text-slate-700 capitalize flex items-center gap-2 cursor-pointer" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
            {label} [{value.length}]
          </label>
          {onRemove && (
             <button onClick={onRemove} className="text-red-500 hover:text-red-700 p-1"><Trash2 size={14}/></button>
          )}
        </div>
        {!collapsed && (
          <div className="space-y-4">
            {value.map((item, index) => (
              <div key={index} className="relative group">
                <FormField
                  label={`Item ${index + 1}`}
                  value={item}
                  onChange={(newVal: any) => {
                    const newArr = [...value];
                    newArr[index] = newVal;
                    onChange(newArr);
                  }}
                  onRemove={() => {
                    const newArr = value.filter((_: any, i: number) => i !== index);
                    onChange(newArr);
                  }}
                />
              </div>
            ))}
            <button
              onClick={() => {
                const template = value.length > 0 ? (typeof value[0] === 'object' ? JSON.parse(JSON.stringify(value[0])) : '') : '';
                onChange([...value, template]);
              }}
              className="mt-2 flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark"
            >
              <Plus size={16} /> Tambah Item
            </button>
          </div>
        )}
      </div>
    );
  }

  if (typeof value === 'object' && value !== null) {
    return (
      <div className="ml-4 border-l-2 border-slate-200 pl-4 py-2 mt-2">
         <div className="flex items-center justify-between mb-2">
          <label className="font-semibold text-slate-700 capitalize flex items-center gap-2 cursor-pointer" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
            {label}
          </label>
          {onRemove && (
             <button onClick={onRemove} className="text-red-500 hover:text-red-700 p-1"><Trash2 size={14}/></button>
          )}
        </div>
        {!collapsed && (
          <div className="space-y-3">
            {Object.keys(value).map((key) => (
              <FormField
                key={key}
                label={key}
                value={value[key]}
                onChange={(newVal: any) => onChange({ ...value, [key]: newVal })}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="mt-3 relative">
      <div className="flex items-center justify-between mb-1">
        <label className="text-sm font-medium text-slate-600 capitalize">{label}</label>
        {onRemove && (
             <button onClick={onRemove} className="text-red-500 hover:text-red-700 p-1 hidden group-hover:block absolute -right-6 top-6"><Trash2 size={14}/></button>
        )}
      </div>
      {type === 'textarea' ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary min-h-[100px]"
        />
      ) : type === 'checkbox' ? (
         <input
          type="checkbox"
          checked={value}
          onChange={(e) => onChange(e.target.checked)}
          className="rounded border-slate-300 text-primary focus:ring-primary"
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-slate-300 p-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary"
        />
      )}
    </div>
  );
};

export function DynamicFormEditor({ section, initialData, onSave, isSaving }: any) {
  const [data, setData] = useState(() => JSON.parse(initialData));

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
        <h3 className="font-semibold text-ink capitalize text-lg">Bagian: {section}</h3>
        <button
          disabled={isSaving}
          onClick={() => onSave(section, JSON.stringify(data))}
          className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50"
        >
          <Save size={18} /> Simpan Perubahan
        </button>
      </div>
      <div className="p-6">
        <div className="max-w-4xl">
           <FormField label="Root" value={data} onChange={setData} />
        </div>
      </div>
    </div>
  );
}
